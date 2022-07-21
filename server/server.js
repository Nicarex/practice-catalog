const express = require("express");
const path = __dirname + '/app/views/';
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const pool = require("./db")

//middleware
app.use(express.static(path));

app.use(cors({
    origin: "http://192.168.110.7:8081",
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

app.get('/', function (req,res) {
    res.sendFile(path + "index.html");
  });

//ROUTES//

//create exhibits (POST)
app.post("/exhibits/create", async(req, res) => {
    try {
        const { user_id } = req.body;
        const { name_of_exhibit } = req.body;
        const { status_of_exhibit } = req.body;
        const { description } = req.body;
        const { place } = req.body;
        const { tag_name } = req.body;
        const { field_content} = req.body;
        const exhibit_id = await pool.query(
            "INSERT INTO exhibits (user_id, name_of_exhibit, status_of_exhibit, description, place) VALUES($1, $2, $3, $4, $5) RETURNING id",
            [user_id, name_of_exhibit, status_of_exhibit, description, place]);
        const select_tag = await pool.query(
            "SELECT tag_id FROM tags WHERE tag_name = $1",
            [tag_name]
        );
        var tag_id = select_tag.rows[0]['tag_id'];
        var id = exhibit_id.rows[0]['id'];
        const taggings_id = await pool.query(
            "INSERT INTO taggings (tag_id, taggable_id, type, field_content) VALUES($1, $2, 'exhibit', $3)",
            [tag_id, id, field_content]
        );
        /*const select_all = await pool.query(
            "SELECT * FROM exhibits WHERE ((user_id = $1) and (status = true))",
            [user_id]
        );*/
        res.status(201).send();
    } catch (err) {
        console.error(err.message);
    }
})

//show all exhibits (GET)
app.get("/exhibits/show-all", async(req, res) => {
    try {
        const select_all = await pool.query(
            "SELECT * FROM exhibits WHERE status = true"
        );
        res.json(select_all.rows)
    } catch (err) {
        console.error(err.message);
    }
})

//delete exhibit (DELETE)
app.delete("/exhibits/delete", async(req,res) =>{
    try {
        const { exhibit_id } = req.body;
        const delete_exhibit = await pool.query(
            "UPDATE exhibits SET status = false WHERE id = $1",
            [exhibit_id]
        );
        res.status(204).send();
    } catch (err){
        console.error(err.message);
    }
})

//show exhibit (GET)

app.get("/exhibits/show/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const select_all = await pool.query(
            "SELECT * FROM exhibits WHERE ((id = $1) and (status = true))",
            [id]
        );
        res.json(select_all.rows)
    } catch (err) {
        console.error(err.message);
    }
})

app.get("/exhibits/show/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const select_all = await pool.query(
            "SELECT * FROM exhibits WHERE ((id = $1) and (status = true))",
            [id]
        );
        res.json(select_all.rows)
    } catch (err) {
        console.error(err.message);
    }
})

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

app.listen(8080, () => {
    console.log("Server listening on port 8080");
});
