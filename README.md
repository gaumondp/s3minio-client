# S3/MinIO Client with Bun & Tauri

This project is a minimal, cross-platform desktop application for testing connections to S3 or MinIO buckets. It is built with [Bun.js](https://bun.sh/) (v1.3.x) and [Tauri](https://tauri.app/), providing a lightweight and fast user experience.

## Features

*   **Cross-Platform:** Runs on Windows, macOS, and Linux.
*   **S3/MinIO Connectivity:** Test your connection to any S3-compatible object storage.
*   **Debug Window:** View detailed logs from the connection test directly in the application.
*   **Lightweight:** Built with modern, efficient technologies like Rust and Bun.

## Architecture

The application is a "single visual entity" composed of a few key components:

*   **Tauri:** The core of the desktop application, providing the windowing system and the bridge between the frontend and the backend.
*   **Vite:** The frontend is a simple HTML, CSS, and TypeScript application built with Vite.
*   **Bun.js:** The backend logic is a TypeScript script that runs on Bun. It handles the S3 connection test.
*   **Rust:** Tauri's backend is written in Rust. It is used to execute the Bun script and communicate with the frontend.
*   **Pino:** The logging library used to format and display logs in the debug window.

## Getting Started

To get started with the project, please refer to the [Installation Guide](INSTALL.md) for detailed instructions on how to set up the development environment.

## S3/MinIO Configuration

This application requires access to an S3 or MinIO bucket.

1.  **Copy the Environment File:**
    Duplicate the `example.env` file and rename the copy to `.env`.

    ```bash
    cp example.env .env
    ```

2.  **Edit the `.env` file:**
    Open the `.env` file and update the following variables with your S3/MinIO credentials:

    *   `S3_ENDPOINT`: The URL of your S3/MinIO server (e.g., `http://localhost:9000`).
    *   `S3_ACCESS_KEY_ID`: Your access key.
    *   `S3_SECRET_ACCESS_KEY`: Your secret key.
    *   `S3_REGION`: The region of your bucket (e.g., `us-east-1`).
    *   `S3_BUCKET`: The name of the bucket to connect to.

This file is ignored by Git, so your credentials will remain private.
