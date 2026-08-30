# Docker Learning Lab

A hands-on Docker learning project demonstrating how to containerize a React + Vite application using a multi-stage build and Nginx.

## Overview

This project is a practical learning repo focused on Docker fundamentals. It takes a small React frontend, builds it for production, and then serves the generated static files through Nginx inside a container.

The goal is to understand the full container workflow:

- package the app
- build a production artifact
- run it in a lightweight container
- expose the app on a mapped port

## Features & Concepts

- React 19 + Vite frontend
- Multi-stage Docker build
- Production build optimization
- Nginx serving the built app
- Container port mapping
- Local Docker workflow
- Vercel deployment configuration

## Docker Workflow

```text
React + Vite source
        ↓
Node build stage
        ↓
npm install + npm run build
        ↓
Production dist output
        ↓
Nginx runtime stage
        ↓
Container running on port 80
        ↓
Host port mapped to localhost:8080
```

This repository demonstrates the key Docker idea that the build and runtime environments can be separated:

- Stage 1: a Node image installs dependencies and creates the production bundle
- Stage 2: a lightweight Nginx image serves that final built output
- Result: the final container does not need Node.js installed at runtime

## Project Structure

```text
Docker_Learning/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── public/
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
├── package-lock.json
├── Dockerfile.vercel
├── vercel.json
├── README.md
└── .gitignore
```

## Local Development

### Prerequisites

- Node.js 22 or newer
- npm

### Start the app locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal, typically:

```text
http://localhost:5173
```

### Production build check

```bash
npm run build
npm run lint
```

> This project does not define `npm run start` because it is designed as a Vite frontend. Use `npm run dev` for local development and `npm run build` for production output.

## Run with Docker

The repository includes a Docker configuration in `Dockerfile.vercel`.

### Build the image

```bash
docker build -f Dockerfile.vercel -t docker-learning .
```

### Run the container

```bash
docker run --rm -p 8080:80 docker-learning
```

Then visit:

```text
http://localhost:8080
```

The `-p 8080:80` flag maps:

- host port: `8080`
- container port: `80`

This means traffic sent to your local machine on port 8080 is forwarded to the container's Nginx server.

## Deployment

This project is also configured for Vercel deployment via `vercel.json`.

Typical Vercel settings:

```text
Framework preset: Vite
Build command: npm run build
Output directory: dist
Install command: npm install
```

Vercel deploys the static build directly, while the Docker setup is mainly useful for learning how a frontend can be containerized locally or in a container host environment.

## Why This Repo Matters

This project is a good example of containerization basics for a frontend app. It teaches a practical workflow that many developers use when moving from local development to deployment:

- build a frontend app
- create an optimized production bundle
- serve it with Nginx
- run the app in a container

## Author

GitHub: [Bokka-kartik](https://github.com/Bokka-kartik)
