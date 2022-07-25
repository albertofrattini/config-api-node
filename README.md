# Config API

## Getting Started

Install all your dependencies

```sh
npm install
```

### Database

Run a docker container for PostgreSQL. We will use this container as a database.

```sh
docker run --name psql -dp 5432:5432 -v postgres-data:/var/lib/postgresql/data -e POSTGRES_PASSWORD=password -e POSTGRES_USER=alberto -e POSTGRES_DB=configdb postgres
```

If you ran exactly the above command, you can just add the following to your `.env`:

```sh
DATABASE_URL=postgresql://alberto:password@localhost:5432/configdb
```

Otherwise, you'll need to change it into the following:

```sh
DATABASE_URL=postgresql://<user>:<password>@localhost:5432/<db_name>
```

The following command needs to be executed only if there is no schema definition inside of the "configdb" database that was created by the above docker command. When deployed, the application will have a DATABASE_URL pointing to a managed database containing already all the necessary tables. But if you are running this application for the first time, you might need to generate the schema, tables, etc... thus the following command will do that, based on the schema definition that can be found in prisma.schema.

```sh
npx prisma migrate dev --name init
```

### Running the application

Run the application

```sh
npm run dev
```

You can now check what are the endpoints and how to use them by visiting http://localhost:3000/docs

## Tests

In order to run the tests we first need to launch the application

```sh
npm run dev
```

And subsequently you can run all the tests using

```sh
npm run test
```

## Contribution

If you want to contribute to the following project, I would advise first to take a look at the [Ideas](###Ideas) listed down below. If you have any other, please do the following:

-   Create a ticket
-   Fork the repository
-   Implement the changes and push them on your branch
-   Create a pull request

### Ideas

-   Adding CI/CD into the project. An idea could be creating a pipeline that runs whenever need code is pushed to the repository in github. The pipeline would mostly run tests but also take care of deploying the application to a development instance. A suggested technology would be Jenkins.
-   In order to create and setup the Infrastructure, we could add Terraform or Ansible to the project.
-   Extending the current documentation with more descriptions and working examples for each endpoint.
-   Increase the test coverage and introducing the usage of libraries, such as Supertest, to avoid spawning the application whenever we need to test it.
-   Extending the Prisma error handling to cover all the possible failures. Alongside this, it would be nice to move error messages into a centralized file for easier manipulation and accessibility.
-   The usage of Typescript is minimal in the project. We need to increase the code covered by typing.
