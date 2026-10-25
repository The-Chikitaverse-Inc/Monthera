CREATE SCHEMA IF NOT EXISTS monthera;

--* Tabela dos usuarios
CREATE TABLE IF NOT EXISTS monthera.user (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    email  VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(64) NOT NULL,
    state VARCHAR(20) DEFAULT 'free'
);