import { invoke } from "@tauri-apps/api/core";

let testConnectionBtn: HTMLButtonElement | null;
let debugOutputEl: HTMLElement | null;

async function testConnection() {
  if (debugOutputEl) {
    debugOutputEl.textContent = "Testing S3 connection...";
    try {
      const result = await invoke("test_s3_connection");
      debugOutputEl.textContent = String(result);
    } catch (error) {
      debugOutputEl.textContent = String(error);
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  testConnectionBtn = document.querySelector("#test-connection-btn");
  debugOutputEl = document.querySelector("#debug-output");

  testConnectionBtn?.addEventListener("click", () => {
    testConnection();
  });
});
