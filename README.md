# Docker Learning Lab

A small React + Vite project for learning how to package a frontend application in Docker. The app includes an interactive checklist and the commands needed to build and run it yourself.

## What is included

- React 19 with Vite
- A responsive Docker learning dashboard
- A multi-stage Dockerfile
- Nginx serving the production build
- ESLint configuration

## Run locally

### Requirements

- Node.js 22 or newer
- npm

Install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

To create a production build or check the code with ESLint:

```bash
npm run build
npm run lint
```

> `npm run start` is not defined in this project. Use `npm run dev` for local development.

## Run with Docker

Build the image from this directory:

```bash
docker build -t stage2-app .
```

Start the container and map port `8080` on your computer to Nginx port `80`:

```bash
docker run --rm -p 8080:80 stage2-app
```

Visit [http://localhost:8080](http://localhost:8080).

The Dockerfile uses two stages: Node builds the Vite application, and a small Nginx image serves the generated `dist` folder.

## Project structure

```text
src/
	App.jsx       # Main learning dashboard
	App.css       # Dashboard styles
	index.css     # Global styles and design tokens
public/         # Static assets
Dockerfile      # Production container definition
```

## GitHub

After creating a repository on GitHub, run these commands from the `Stage2` folder:

```bash
git init
git add .
git commit -m "Create Docker learning lab"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your own GitHub repository URL.
