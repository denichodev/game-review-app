# game-review-app

game-review-app is a simple game reviewing web app made with Hasura and React using ChakraUI as the design system. It's sole
purpose is for learning. To make things easier, we use CRA to create the front-end boilerplate.

![](undertale.gif)

## Folder structure

```sh
game-review-app/
├── hasura            # Hasura migrations, config, meta, and seeds
└── (...rest)         # The rest are mostly from Create React App clientside code.
```

The clientside folder structure inside src follows a Domain Driven Design architecture (hopefully).

## Requirements

There are not so many unique requirements in this project, I assume you already know where and how to get it by simply
reading the source code, but if you don't, here's some clue:

1. **Docker (docker-compose)**: App is powered by [Docker](https://www.docker.com/) with Docker Compose to run Hasura.
2. **NodeJS**: For clientside tooling with CRA.
3. **Hasura CLI**: I didn't put the CLI as a scoped dependency, install it globally with `yarn global add hasura-cli`.
4. **Yarn**: This docs assumes that you use Yarn, use whatever you want.

## Setup & Workflow

1. Copy the `.env.example` to `.env`. Since this is for learning purpose, you don't need to change anything, I've setup the easiest basic `.env`
2. Run your backend (Hasura & Postgres) with `docker-compose up`, whether you want to pass in a `-d` for "detached" mode, it's up to you.
3. If it's your first time running this, you need to apply the migrations inside the `hasura` directory by doing this:

```bash
$ cd hasura
$ hasura migrate apply
$ hasura metadata apply
$ hasura seeds apply
```

4. Run the clientside app, simply by using `yarn start`

## Scripts

You can also run the app without Docker by running this script.

| `yarn <script>` | Description                              |
| --------------- | ---------------------------------------- |
| `gql-codegen`   | Generate typescript from your GQL Schema |
| `start`         | Start the clientside React app           |

## Improvements to do if I have the whole time in the world

- TESTING! Both for backend and frontend side.
- Authentication. The backend is very open, I can add a hasura secret key with webhook, but the focus in this repo is ain't it.
- Error handling for clientside app, I didn't handle the `4nn` or `5nn` error properly in the clientside app.
- Proper image size, lazy loading images, and any othere performance-related clientside code.
- Proper router with stack navigator, to make it behaves more like a mobile app.
- Makes the clientside app to be in a docker service as well.
- Deployment handling & configurations.

---
