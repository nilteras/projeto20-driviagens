CREATE TABLE "passengers" (
    "id" SERIAL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL
);

CREATE TABLE "cities" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL
);

CREATE TABLE "flights" (
    "id" SERIAL PRIMARY KEY,
    "origin" INTEGER REFERENCES cities(id),
    "destination" INTEGER REFERENCES cities(id),
    "date" TIMESTAMP NOT NULL
);

CREATE TABLE "travels" (
    "id" SERIAL PRIMARY KEY,
    "passengerId" INTEGER REFERENCES passengers(id),
    "flightId" INTEGER REFERENCES flights(id)
);



