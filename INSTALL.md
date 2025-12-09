# Installation Guide

This guide will walk you through the process of setting up the development environment for the S3/MinIO Client application.

## Prerequisites

Before you begin, you will need to install several tools and dependencies. Please follow the instructions for your operating system.

---

### macOS

#### 1. Xcode Command Line Tools

Tauri uses Xcode for development on macOS. If you don't have it installed, open a terminal and run the following command:

```bash
xcode-select --install
```

#### 2. Rust

Tauri is built with Rust. Install Rust using `rustup` by running the following command in your terminal:

```bash
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

After the installation is complete, close and reopen your terminal to ensure the `rustc` and `cargo` commands are available.

#### 3. Bun.js

This project uses Bun.js as its JavaScript runtime and package manager. You can find installation instructions on the [official Bun website](https://bun.sh/).

---

### Windows

#### 1. Microsoft C++ Build Tools

Tauri requires the Microsoft C++ Build Tools for development on Windows.

1.  Download the **Microsoft C++ Build Tools** installer from the [Visual Studio website](https://visualstudio.microsoft.com/visual-cpp-build-tools/).
2.  Run the installer and select the **"Desktop development with C++"** workload.

#### 2. WebView2

Tauri uses Microsoft Edge WebView2 to render content on Windows.

*   **Windows 11:** WebView2 is pre-installed.
*   **Windows 10:** You will need to download and install the **"Evergreen Bootstrapper"** from the [WebView2 Runtime download section](https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section).

#### 3. Rust

Tauri is built with Rust. Visit the [official Rust website](https://www.rust-lang.org/tools/install) to download and run the `rustup-init.exe` installer.

When prompted during the installation, ensure that the **MSVC toolchain** is selected as the default. It should be `x86_64-pc-windows-msvc`.

After the installation is complete, close and reopen your terminal or PowerShell to ensure the `rustc` and `cargo` commands are available.

#### 4. Bun.js

This project uses Bun.js as its JavaScript runtime and package manager. You can find installation instructions on the [official Bun website](https://bun.sh/).

---

### Linux (Debian-based)

#### 1. System Dependencies

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

#### 2. Rust

Tauri is built with Rust. Install Rust using `rustup` by running the following command in your terminal:

```bash
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

After the installation is complete, close and reopen your terminal to ensure the `rustc` and `cargo` commands are available.

#### 3. Bun.js

This project uses Bun.js as its JavaScript runtime and package manager. You can find installation instructions on the [official Bun website](https://bun.sh/).

---

## Project Setup

Once you have installed all the prerequisites for your operating system, you can set up the project by following these steps:

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
