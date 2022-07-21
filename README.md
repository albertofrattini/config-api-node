# Config API

## Getting Started

```sh
npm install
```

Run a docker container for PostgreSQL. We will use this container as a database.

```sh
docker run --name psql -dp 5432:5432 -e POSTGRES_PASSWORD=password -e POSTGRES_USER=alberto -e POSTGRES_DB=configdb postgres
```

Now we can generate the schema for Prisma to use when communicating with the db. It will use the schema.prisma file and will create what's necessary in the connected db

```sh
npx prisma migrate dev --name init
```

Run the application

```sh
npm run dev
```
