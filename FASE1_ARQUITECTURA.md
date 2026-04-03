# FASE1_ARQUITECTURA.md

## Technical Architecture Summary
This document provides an overview of the technical architecture for the Jordan Agua backend. The architecture is designed to be scalable, maintainable, and secure.

## Stack Justification
The following technologies are being used:
- **Node.js**: For building fast and scalable server-side applications.
- **Express.js**: To handle HTTP requests and serve APIs.
- **MongoDB**: As a NoSQL database for flexible data storage.
- **Mongoose**: For object modeling with MongoDB.
- **JWT**: For secure authentication.
- **Docker**: For containerization of applications.

## Folder Structure
The folder structure of the project is organized as follows:
```
- src/
  - config/
  - controllers/
  - models/
  - routes/
  - middleware/
  - services/
  - utils/
- tests/
- scripts/
```

## Modules
- **Config Module**: Handles configuration settings.
- **Controllers Module**: Manages the application's business logic.
- **Models Module**: Defines data models and schemas.
- **Routes Module**: Defines API endpoints.
- **Middleware Module**: Contains middleware functions.
- **Services Module**: Implements reusable business logic.
- **Utils Module**: Provides utility functions.

## Authentication Strategy
- **JWT-Based Authentication**: Users will receive a signed token after successful login which they must include in the header of requests to access protected resources.

## Reporting Strategy
- Reports will be generated using a dedicated reporting service that fetches data from the database and processes it to provide insights as required.
- Reports will be available as downloadable files in CSV and PDF formats.

## Daily Opening/Closing Strategy
- The application will initialize connections (database, services) at startup and close them gracefully on shutdown. Automated job schedules will handle daily open/close tasks using a job scheduler like cron.

## Naming Conventions
- Use **camelCase** for variable and function names.
- Use **PascalCase** for class names.
- Use **snake_case** for configuration files and environmental variables.

## Development Scripts
- `npm run dev`: Launches the application in development mode.
- `npm run test`: Executes the test suite.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to check code quality.
