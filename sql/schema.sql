DROP TABLE exercises;
DROP TABLE routine;
DROP TABLE users;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR (100),
    email VARCHAR(50),
    password VARCHAR(500)
);

CREATE TABLE routine
(
    id SERIAL PRIMARY KEY,
    exercise_list VARCHAR(1000)
);

CREATE TABLE exercises
(
    id SERIAL PRIMARY KEY,
    exercise VARCHAR(200),
    routine_id INT REFERENCES routine(id)
);