<<<<<<< HEAD
# tguptime
Telegram-integrated server monitoring agent.
=======
# tguptime-client

Minimal static client scaffold for the tguptime project.

How to run

1. From the `tguptime-client` folder install any tooling (optional):

   ```bash
   cd /home/alexander_skystamper_com/projects/tguptime/tguptime-client
   # no install required; the start script uses npx to run a static server
   npm run start
   # tguptime

   Telegram-integrated server monitoring agent.

   ---

   # tguptime-client

   Minimal static client scaffold for the tguptime project.

   How to run

   1. From the `tguptime-client` folder install any tooling (optional):

      ```bash
      cd /home/alexander_skystamper_com/projects/tguptime/tguptime-client
      # no install required; the start script uses npx to run a static server
      npm run start
      ```

   2. Open http://localhost:3000 in your browser.

   Notes

   - This is a minimal static scaffold. Add a build tool (Vite/Parcel/Create React App) or frameworks as needed.
   - To keep things light, the `start` script uses `npx http-server public -p 3000`.


   _This README was merged with the repository README when connecting the local `tguptime-client` workspace._

## Development — virtual environment

For local development we recommend creating a per-project virtual environment so this workspace isn't affected by system Python packages.

From the repository root:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

After activating the venv, install any development dependencies you need. The repository includes `tguptime.code-workspace` and `.vscode/settings.json` which point VS Code at `${workspaceFolder}/.venv` so the editor will automatically prefer this interpreter when the workspace is opened.

Note: `.venv/` is already included in `.gitignore`.
