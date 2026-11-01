CREATE SCHEMA IF NOT EXISTS monthera;

--* Tabela dos usuarios - Comp: 
CREATE TABLE IF NOT EXISTS monthera.user (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    email  VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(64) NOT NULL,
    state VARCHAR(20) DEFAULT 'free', --* Estado da conta do ususario
    
    --* Count dos metodos QUEST
    ups_count NUMBER DEFAULT 0 CHECK (ups_count >= 3),
    quest_count NUMBER DEFAULT 0 CHECK (quest_count >= 5),

);

--* Tabela dos Ups da semana(U) - Comp: Gereciamento dos Ups(U)
CREATE TABLE IF NOT EXISTS monthera.upgrades_of_the_week (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) UNIQUE NOT NULL,
    
    --* Conta quantas vezez aquele Up foi realizado na semana
    habit_performed NUMBER DEFAULT 0 
);

CREATE TABLE IF NOT EXISTS monthera.quest (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    quest_completed NUMBER DEFAULT 0
)

--Todo Criar todas as tabelas necessarias da doc