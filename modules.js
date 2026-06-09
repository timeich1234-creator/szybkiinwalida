(async function () {
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby8R_uKuhZNWbAQCBP73tmwhbrqxtA4YI7wcNnAAyrh5D5VlCKnZsHkzISFZvPNu3mN/exec";
 
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
