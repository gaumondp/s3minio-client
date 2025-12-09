# Installation Guide

This guide will walk you through the process of setting up the development environment for the S3/MinIO Client application.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

*   **Bun.js (v1.3.x):** This project uses Bun as its JavaScript runtime and package manager. You can find installation instructions on the [official Bun website](https://bun.sh/).
*   **Rust:** Tauri is built with Rust. If you don't have it installed, you can get it from the [official Rust website](https://www.rust-lang.org/tools/install).
*   **A C Compiler:** Required by some of the dependencies.
*   **`pkg-config`:** Required for building some of the Rust dependencies on Linux.

## Platform-Specific Dependencies

Please follow the instructions for your operating system to install the necessary dependencies for Tauri.

### Linux (Debian-based)

You will need to install several development libraries for GTK and WebKit. Open a terminal and run the following command:

```bash
sudo apt-get update
sudo apt-get install -y \
  libglib2.0-dev \
  libgtk-3-dev \
  libwebkit2gtk-4.1-dev \
  build-essential \
  pkg-config
```

### macOS

You will need to install the Xcode command-line tools. Open a terminal and run the following command:

```bash
xcode-select --install
```

### Windows

1.  **Microsoft Visual Studio C++ Build Tools:** You can download the build tools from the [Visual Studio website](https://visualstudio.microsoft.com/visual-cpp-build-tools/). When installing, make sure to select the "C++ build tools" workload.
2.  **WebView2:** Tauri requires the WebView2 runtime on Windows. It is pre-installed on Windows 11. If you are on Windows 10, you can download it from the [official Microsoft website](https://developer.microsoft.com/en-us/microsoft-edge/webview2/).

## Project Setup

Once you have installed all the prerequisites, you can set up the project by following these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install the dependencies:**
    ```bash
    bun install
    ```

3.  **Configure the S3/MinIO connection:**
    Copy the `example.env` file to a new file named `.env` and update it with your S3/MinIO credentials.
    ```bash
    cp example.env .env
    ```

4.  **Run the application:**
    To start the application in development mode, run the following command:
    ```bash
    bun run tauri dev
    ```

    To build the application for production, run the following command:
    ```bash
    bun run tauri build
    ```
