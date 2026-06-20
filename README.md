# Setup Guide

This project includes complete Docker and Docker Compose configurations for both production and development environments.

## Files Overview

- **Dockerfile** - Production multi-stage build for optimized image size
- **Dockerfile.dev** - Development image with hot reload support
- **docker-compose.yml** - Production setup with PostgreSQL, Redis, and the app
- **docker-compose.dev.yml** - Development setup with hot reload
- **.dockerignore** - Excludes unnecessary files from Docker build context
- **.env.example** - Example environment variables

## Prerequisites

- Docker and Docker Compose installed
- For local development without Docker: Node.js 22+, PostgreSQL 17+, Redis 7+

## Quick Start - Production

1. Clone the repository and create your `.env` file:

```bash
cp .env.example .env
```

2. Update the `.env` file with your configuration:

```bash
# Change these to secure values
DB_PASSWORD=your-secure-password
JWT_SECRET=your-long-random-secret-key
JWT_REFRESH_SECRET=your-long-random-refresh-secret
```

3. Start all services:

```bash
docker-compose up -d
```

4. The API will be available at `http://localhost:3000`

## Quick Start - Development

1. Create your `.env` file:

```bash
cp .env.example .env
```

2. Start development environment with hot reload:

```bash
docker-compose -f docker-compose.dev.yml up -d
```

3. View logs:

```bash
docker-compose -f docker-compose.dev.yml logs -f app
```

4. The API will be available at `http://localhost:3000` with hot reload enabled
