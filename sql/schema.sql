DROP TABLE exercises;
DROP TABLE routines;
DROP TABLE users;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR (100),
    email VARCHAR(50),
    password VARCHAR(500)
);

CREATE TABLE routines
(
    id SERIAL PRIMARY KEY,
    routine_name VARCHAR(200),
    exercise_list VARCHAR(1000),
    user_id INT REFERENCES users(id)
);

CREATE TABLE exercises
(
    id SERIAL PRIMARY KEY,
    exercise VARCHAR(200),
    routine_id INT REFERENCES routines(id)
);