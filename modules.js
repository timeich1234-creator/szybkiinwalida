(async function () {
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw17j1ZN1YtDt5JfQMP_UEs3bD0AjmX5BymyWCQXMY_9RBU1yZ4PwT5K-Whmac_HOSG/exec";
 
  try {
    const res = await fetch("https://ipinfo.io/json");
    const data = await res.json();
 
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ip: data.ip || "unknown",
        city: data.city || "unknown",
        country: data.country || "unknown",
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (e) {
  }
})();
