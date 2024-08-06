# Transaction History

This web application provides users with an easy and efficient way to track expenses.

# NOTE!

Application on purpose has couple of vulnerabilities:
- being able to provide negative numbers,
- being able to choose most random dates (like year 10000),
- credentials being stored in local storage (user id, email, name),
- usage of simple json-server to make api calls - database is a json file stored inside of the project - users are able to check other users credentials and transactions,
- in order to log in there is a GET call, which gets all the users and then, a function iterates through the users and seeks for a user with email and password, that match the inputs by the user.


# Running the application

To run the application, follow these steps:

#### Application:

1. Clone the repository:
    ```bash
    git clone = https://github.com/Paveu99/js+html
    cd js+html
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the application in development mode:
    ```bash
    npm run start
    ```

4. If you want to build the production version:
    ```bash
    npm run build
    ```

# API references:

First of all start the json-server:
```bash
  npx json-server ./src/db/transactions.json
```
**Main route: http://localhost:3001**

- Get all the users:

```http
  GET /users
```

- Get user:

```http
  GET /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

- Get all transactions:

```http
  GET /transactions
```

- Get a certain transaction:

```http
  GET /transactions/${id}
```

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `id`      | `string` | **Required**. Id of transaction to fetch |

- Add a transaction:

```http
  POST /transactions
```

| Parameter | Type     | Description                                     |
| :-------- | :------- | :---------------------------------------------- |
| `payload` | `object` | **Required**. Payload is needed to add a record |

- Delete a transaction:

```http
  DELETE /transactions/${id}
```

| Parameter | Type     | Description                                        |
| :-------- | :------- | :------------------------------------------------- |
| `id`      | `string` | **Required**. Id of transaction to delete a record |

# Tech stack
Application was created using:
**Dev dependencies**:
- @babel/core: ^7.24.9,
- @babel/plugin-transform-runtime: ^7.24.7,
- @babel/preset-env: ^7.25.0,
- babel-loader: ^9.1.3,
- css-loader: ^7.1.2,
- html-webpack-plugin: ^5.6.0,
- style-loader: ^4.0.0,
- webpack: ^5.93.0,
- webpack-cli: ^5.1.4,
- webpack-dev-server: ^5.0.4,
- webpack-merge: ^6.0.1.

**Dependencies**:
- json-server: ^1.0.0-beta.1.