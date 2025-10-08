# Tenant

Quick start to run the Tenant admin web app locally.

## Prerequisites

- Node.js 18+ (or 20+ recommended)
- npm (comes with Node)

## Clone this repository

1. Copy the repository URL from GitHub (Code → HTTPS/SSH)
2. Clone and enter the project directory:

```bash
git clone <YOUR_GITHUB_REPO_URL>
cd Tenant
```

### Clone with GitHub Desktop (easiest)

1. In your browser, click the green "Code" button on the repo, then copy the URL.
2. Open GitHub Desktop → File → Clone repository… → URL tab.
3. Paste the URL, choose a local path (e.g., your Projects folder), and click "Clone".
4. When the clone finishes, click "Open in Visual Studio Code" (or open the folder in your editor).
5. Open a terminal in the project folder and follow the steps below to install and run.

## Setup & Run (Development)

```bash
cd tenant-admin
npm install
npm start
```

Then open `http://localhost:3000` in your browser.

## Available Routes (examples)

- `/` – Dashboard
- `/signin` – Sign in (UI only; clicking Sign in navigates to dashboard)
- `/units`, `/work-orders`, `/tenants`, `/vendors`, `/calendar`, `/reports`, `/messages`

## Production Build

```bash
cd tenant-admin
npm run build
```

Build output is generated in `tenant-admin/build/`.

## Notes

- The app is currently UI-only (no backend). Navigation is handled with React Router.
- If port 3000 is in use, the dev server will prompt to use another port.
