const root = document.getElementById('root');
root.innerHTML = `
  <h1>tguptime client</h1>
  <p>Simple static client running from <code>public/</code>.</p>
  <button id="ping">Ping controller</button>
  <pre id="out"></pre>
`;

const out = document.getElementById('out');
document.getElementById('ping').addEventListener('click', async () => {
  out.textContent = 'Pinging... (no backend configured)';
  try {
    // placeholder for actual API call
    // const res = await fetch('/api/ping');
    // out.textContent = await res.text();
    await new Promise(r => setTimeout(r, 500));
    out.textContent = 'No backend configured — this is a placeholder response.';
  } catch (err) {
    out.textContent = 'Error: ' + err;
  }
});
