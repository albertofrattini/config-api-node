# Config API

## Getting Started

```sh
npm install
```

Run a docker container for PostgreSQL. We will use this container as a database.

```sh
docker run --name psql -dp 5432:5432 -v postgres-data:/var/lib/postgresql/data -e POSTGRES_PASSWORD=password -e POSTGRES_USER=alberto -e POSTGRES_DB=configdb postgres
```

The following command needs to be executed only if there is no schema definition inside of the "configdb" database that was created by the above docker command. When deployed, the application will have a DATABASE_URL pointing to a managed database containing already all the necessary tables. But if you are running this application for the first time, you might need to generate the schema, tables, etc... thus the following command will do that, based on the schema definition that can be found in prisma.schema.

```sh
npx prisma migrate dev --name init
```

Run the application

```sh
npm run dev
```
