# NodeJS - REST Demo


## Requirements
* [Node](https://nodejs.org/en/download/) `^5.0.0`
* [Yarn](https://yarnpkg.com/en/docs/install#debian-stable) `^0.23.0` or [NPM](https://www.npmjs.com/) `^3.0.0`

## Instalation 
After confirming that your environments meets the above [Requirements](#Requirements), you can clone the project by doing
the following:

```bash
$ git clone https://github.com/DeanHristov/REST-API.git <my-project-name>
$ cd <my-project-name>
```
When that's done, install the project dependencies. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic dependency management, but `npm install` will suffice.

```bash
$ yarn Install project dependencies (or `npm install`)
```

## Running the project

After completing the [installation](#instalation) step, you are ready to start the project

```bash
$ yarn start 
```

Serves your app at `http://localhost:3000`

The all configuration envelopments  can be found in `~/.env` file


## Resources
All data are fake and they are taken from: [jsonplaceholder](https://jsonplaceholder.typicode.com/)

* `/posts`  100 posts
* `/comments`  500 comments
* `/albums`  100 albums
* `/photos`  5000 photos
* `/todos`  200 todos
* `/users`  10 users

## Routes

### Posts
| HTTP Method | URL | Operation | Operation type |
|-------------|-----|-----------|----------------|
| GET | /posts | Get list of posts | Read |
| GET | /posts/:id | Get post with selected ID | Read |
| GET | /posts/:id/comments | Get a list of comments per post  | Read |
| GET | /posts?userId=x | Get a list of posts per user | Read |
| POST | /posts | Create a new post | Write |
| PUT | /posts/:id | Update a selected post | Write |
| PATCH | /posts/:id | ------ | Write |
| DELETE | /posts/:id | Delete a post | Delete |

### Comments
| HTTP Method | URL | Operation | Operation type |
|-------------|-----|-----------|----------------|
| GET | /comments | Get list of comments | Read |
| GET | /comments/:id| Get a single comment | Read |
| GET | /comments?postId=X | Get a list of comments per post | Read |
| POST | /comment | Create a new comment | Write |
| PUT | /comment/:id | Update a selected comment | Write |
| PATCH | /comment/:id | ------ | Write |
| DELETE | /comment/:id | Delete a comment | Delete |

### Users
| HTTP Method | URL | Operation | Operation type |
|-------------|-----|-----------|----------------|
| GET | /users | Get a list of users | Read |
| GET | /users/:id | Get a single user | Read |
| POST | /users | Create a new users | Write |
| PUT | /users/:id | Update a selected users | Write |
| PATCH | /users/:id | ------ | Write |
| DELETE | /users/:id | Delete a users | Delete |

### Todos
| HTTP Method | URL | Operation | Operation type |
|-------------|-----|-----------|----------------|
| GET | /todos | Get a list of todos | Read |
| GET | /todos/:id | Get a single todo | Read |
| GET | /todos?userId=X | Get a list of todos per user | Read |
| POST | /todos | Create a new todos | Write |
| PUT | /todos/:id | Update a selected todos | Write |
| PATCH | /todos/:id | ------ | Write |
| DELETE | /todos/:id | Delete a todo | Delete |

### Photos
| HTTP Method | URL | Operation | Operation type |
|-------------|-----|-----------|----------------|
| GET | /photos | Get a list of photos | Read |
| GET | /photos/:id | Get a single photo | Read |
| GET | /photos?albumId=X | Get a list of photos per album | Read |
| POST | /photos | Create a new photos | Write |
| PUT | /photos/:id | Update a selected photos | Write |
| PATCH | /photos/:id | ------ | Write |
| DELETE | /photos/:id | Delete a photos | Delete |

### Albums
| HTTP Method | URL | Operation | Operation type |
|-------------|-----|-----------|----------------|
| GET | /albums | Get a list of albums | Read |
| GET | /albums/:id | Get a single album | Read |
| GET | /albums?userId=X | Get a list of albums per user | Read |
| POST | /albums | Create a new album | Write |
| PUT | /albums/:id | Update a selected album | Write |
| PATCH | /albums/:id | ------ | Write |
| DELETE | /albums/:id | Delete a album | Delete |
