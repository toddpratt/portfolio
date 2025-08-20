# 📄 Portfolio / Resume Website

This repository contains my personal **resume website**, built with **React + TypeScript**.  
The resume content is **data-driven**, defined in [`resume/types.ts`](./src/resume/types.ts), making it easy to update and maintain without changing components.

---

## ✨ Features
- ⚛️ **React + TypeScript** — modern, type-safe frontend stack.
- 🗂 **Data-driven resume** — content lives in TypeScript, not hard-coded JSX.
- 🐳 **Dockerized** — reproducible builds with a single `Dockerfile`.
- 🤖 **CI/CD with GitHub Actions** — builds and tests run automatically on every commit.
- 🎨 **Customizable** — easy to change styles, colors, and layout.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js 20+](https://nodejs.org/) (if running locally without Docker)
- [Docker](https://www.docker.com/) (optional)

### Run Locally (Development)
```bash
npm install
npm start
