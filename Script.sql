create table if not exists accounts (
	id SERIAL PRIMARY KEY, 
	status BOOLEAN NOT null default true,
	username varchar(255) not null,
	firstname VARCHAR(255),
	lastname VARCHAR(255),
	email VARCHAR(255) UNIQUE NOT NULL,
	password text NOT NULL,
	gender VARCHAR(255),
	birthday date,
	created_on TIMESTAMP with time zone default current_timestamp not null,
	last_login TIMESTAMP with time zone
);

create table if not exists account_photos (
	photo_id serial primary key,
	user_id int not null references accounts(id) on update restrict on delete restrict,
	status boolean not null default true,
	photo_size int not null,
	body bytea not null,
	created_on timestamp with time zone default current_timestamp not null
);

create table if not exists roles (
	id serial primary key,
	name text unique not null
);

create table if not exists account_roles (
	user_id int not null references accounts(id) on update restrict on delete restrict,
	role_id int not null references roles(id) on update restrict on delete restrict,
	createdAt timestamptz not null,
	updatedAt timestamptz not null,
	primary key (user_id, role_id)
);


--	grant_date timestamp with time zone default current_timestamp not null,


--create or replace function add_default_role_to_user_function()
--	returns trigger
--	language plpgsql
--	as
--$$
--begin
--	insert into account_roles(user_id) values (new.user_id);
--
--	return new;
--end;
--$$;
--
--create trigger add_default_role_to_user
--	after insert
--	on accounts
--	for each row
--	execute procedure add_default_role_to_user_function();

create table if not exists exhibits (
	id serial primary key,
	status boolean not null default true,
	user_id int not null references accounts(id) on update restrict on delete restrict,
	name_of_exhibit text not null,
	status_of_exhibit varchar(255) not null,
	description text not null,
	place text not null,
	created_on timestamp with time zone default current_timestamp not null,
	changed_on timestamp with time zone
);

create table if not exists photos_of_exhibits (
	photo_id serial primary key,
	id_of_exhibit int not null references exhibits (id) on update restrict on delete restrict,
	status boolean not null default true,
	photo_size int not null,
	body bytea not null,
	created_on timestamp with time zone default current_timestamp not null
);

create table if not exists tags (
	tag_id serial primary key,
	tag_name varchar(255) not null,
	additional_field text not null
);

create table if not exists taggings (
	id serial primary key,
	status boolean not null default true,
	tag_id int not null references tags on update restrict on delete restrict,
	taggable_id int not null references exhibits(id) on update restrict on delete restrict,
	type text,
	field_content text not null
);