CREATE TABLE IF NOT EXISTS Potions (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR ( 255 ),
    description VARCHAR ( 255 ),
    price INTEGER,
    category TEXT
);

CREATE TABLE IF NOT EXISTS Weapons (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR ( 255 ),
    description VARCHAR ( 255 ),
    price INTEGER,
    affinity VARCHAR ( 255 ),
    category TEXT
);

CREATE TABLE IF NOT EXISTS Runes (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR ( 255 ),
    description VARCHAR ( 255 ),
    price INTEGER,
    category TEXT
);

CREATE TABLE IF NOT EXISTS Arrows (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR ( 255 ),
    description VARCHAR ( 255 ),
    price INTEGER,
    category TEXT 
);
 