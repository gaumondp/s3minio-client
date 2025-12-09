# Tauri + Vanilla TS

This template should help get you started developing with Tauri in vanilla HTML, CSS and Typescript.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

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
