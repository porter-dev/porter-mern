# porter-mern
This is an example MERN boilerplate that demonstrates how to deploy a full-stack application using Porter. 

Porter deploys your stack using just the single docker-compose.yml file in your local machine, allowing you to go from development to production with a single command.

This is an experimental feature of Porter that is still in active development.

## Prerequisites
- You must have Docker installed on your computer. You can download Docker [here](https://docs.docker.com/get-docker/).
## Getting Started
1. Fork this repository, then clone it into your local directory.
2. Log in and create a project on https://dashboard.alpha.getporter.dev.
3. Install the Porter CLI with the following command: `npm i -g porter-cli`. **Currently Mac Only.**
4. Login from the CLI by running `porter login alpha.getporter.dev`.
5. Develop your application by running `docker-compose up --build` from the root directory. For those who are not familiar with Docker, this will spin up a development environment with hot reloading configured for the MERN stack. You can view your application on http://localhost:3000.
6. Once you are ready to deploy, run `porter compose` from the root directory. This may take up to 5 minutes.
