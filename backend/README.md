# Bunker Backend

This repository contains the backend implementation for the **Bunker** project.

## Features

- RESTful API for managing bunker resources.
- Authentication and authorization.
- Database integration.

## Technologies Used

- **Programming Language**: Python
- **Framework**: FastAPI
- **Database**: PostgreSQL, SqLite3

## Installation

1. Clone the repository

2. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Set up environment variables:

- Create a `.env` file in the root directory.
- Set up the database:
  1. Run Alembic migrations to initialize the database schema:
     ```bash
     alembic upgrade head
     ```
  2. Ensure the database connection is properly configured in the `.env` file.

4. Run the application:
   ```bash
    uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   ```

## Deployment

The backend is deployed on **Vercel** for production. Ensure the following steps are completed for deployment:

1. Configure the environment variables on the Vercel with production settings.
2. Push the latest changes to the main branch.
3. Vercel will automatically build and deploy the application.
