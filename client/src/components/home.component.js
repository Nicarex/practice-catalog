import React, { Component } from "react";
import UserService from "../services/user.service";
import StyleSheet from "../App";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
        <ul id="filter" className="clearfix">
                  <li><a href="#" className="current btn" data-filter="*">Все</a></li>
                  <li><a href="#" className="btn" data-filter=".portfolio">Великая Отечественная Война</a></li>
                  <li><a href="#" className="btn" data-filter=".electronica">Электроника</a></li>
                  <li><a href="#" className="btn" data-filter=".book">Книги</a></li>
                  <li><a href="#" className="btn" data-filter=".mesto">Место</a></li>
              </ul>
              <div className="tset class">
                  <article className="work">
                      <div>
                          <img src="https://cdn.discordapp.com/attachments/996035919956168737/999321573662146710/unknown.png" width="300" height="300" alt="test1"/>
                          <h3>Электроника</h3>
                          <p>ЭВМ Электроника БК 0010-01</p>
                      </div>
                  </article>
                  <article className="work">
                      <div>
                          <img src="https://cdn.discordapp.com/attachments/996035919956168737/999321719829446656/unknown.png" width="300" height="300" alt="test2"/>
                          <h3>Электроника</h3>
                          <p>Микрокалькулятор Электроника МК-59</p>
                      </div>
                  </article>
                  <article className="work">
                      <div>
                          <img src="https://cdn.discordapp.com/attachments/996035919956168737/999328029367095448/PXL_20220707_103437327.jpg" width="300" height="300" alt="test3"/>
                          <h3>Электроника</h3>
                          <p>Микрокалькулятор Электроника МК-41</p>
                      </div>
                  </article>
                  <article className="work">
                  <div>
                      <img src="https://cdn.discordapp.com/attachments/996035919956168737/999327421998317578/xkgm-ETNrS0.jpg" width="300" height="300" alt="test4"/>
                      <h3>Электроника</h3>
                      <p>Арифмометр Феликс-М</p>
                  </div>
              </article>
                  <article className="work">
                      <div>
                          <img src="https://51.img.avito.st/640x480/3530725951.jpg" width="300" height="300"/>
                          <h3>Электроника</h3>
                          <p>Копировальный аппарат Canon FC 228</p>
                      </div>
                  </article>
                  <article className="work">
                      <div>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/%D0%90%D1%80%D0%B8%D1%84%D0%BC%D0%BE%D0%BC%D0%B5%D1%82%D1%80_%D0%92%D0%9A-1.jpg/1200px-%D0%90%D1%80%D0%B8%D1%84%D0%BC%D0%BE%D0%BC%D0%B5%D1%82%D1%80_%D0%92%D0%9A-1.jpg" width="300" height="300"/>
                          <h3>Электроника</h3>
                          <p>Арифмометр ВК-1</p>
                      </div>
                  </article>
                  <article className="work">
                      <div>
                          <img src="https://20-wek.ru/wp-content/uploads/2022/02/elektronika25tc313d1.jpg" width="300" height="300"/>
                          <h3>Электроника</h3>
                          <p>Телевизор Электроника 25ТЦ-313Д</p>
                      </div>
                  </article>
                  <article className="work">
                      <div>
                          <img src="https://cdn.discordapp.com/attachments/996035919956168734/999333221751865415/elektro-teploventilyator-luch-2-sssr-obogrevatel-1-9086270.jpg" width="300" height="300"/>
                          <h3>Электроника</h3>
                          <p>Тепловентилятор Луч-2</p>
                      </div>
                  </article>
                  <article className="work">
                      <div>
                          <img src="https://cdn.discordapp.com/attachments/996035919956168734/999334036113723422/download.jpg" width="300" height="300"/>
                          <h3>Электроника</h3>
                          <p>Телевизор Шилялис-402Д</p>
                      </div>
                  </article>
              </div>
        </header>
      </div>
    );
  }
}
