# HahnTrack
HahnTrack is a full-stack CRUD application designed for managing and tracking maintenance tasks for industrial equipment. Built using Java (Spring Boot) and React.js, it enables users to create, update, and monitor tasks related to machinery maintenance across factory floors or municipal infrastructures.

This project was developed as part of an assessment, inspired by Hahn Software’s focus on digital transformation in the mechanical, infrastructure, and public sectors.

This project consists of a backend Spring Boot API and a frontend application. You can run the app locally or using Docker.

---

## Prerequisites

- Java 17+
- Maven (for backend)
- Node.js and npm/yarn (for frontend)
- Docker & Docker Compose (for containerized setup)

---

## Running Locally

### Backend

1. Make sure your MySQL server is running locally or accessible.
2. Configure your `application.properties` or `application.yml` with your local database connection details.
3. Build and run the backend:
4. 
```bash
cd backend
./mvnw clean install
./mvnw spring-boot:run
```
## Frontend

Navigate to the frontend directory:

```bash
cd frontend

Install dependencies:
npm install
# or
yarn install

Run the frontend dev server:

npm start
# or
yarn start
```

## Running with Docker

### Prerequisites

Make sure Docker and Docker Compose are installed and running.

### Start the app with Docker Compose

From the root project directory, run:

```bash
docker-compose up --build
```
This will:

- Build and start the MySQL database container
- Build and start the backend API container
- (Optionally) Build and start the frontend container if included in your compose file

### Stop containers

```bash
docker-compose down
```

## Notes

- The backend waits for the database container to be ready before starting.
- The database credentials and ports are configured in `docker-compose.yml`.
- You can customize ports and environment variables by editing `docker-compose.yml`.
- If you want to connect to the MySQL database directly, use port `3306` mapped in the compose file.
- Make sure to update your local hosts or DNS if you use custom hostnames in the connection strings.

## Troubleshooting

If the backend fails to connect to the database on startup, check that:

- The MySQL container is running and ready.
- The connection URL, username, and password in backend config match the Docker setup.
- For any permission or volume issues, ensure Docker has appropriate access to volumes.

Use logs for debugging:

```bash
docker-compose logs backend
docker-compose logs db
```





