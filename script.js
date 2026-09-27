const BACKEND_URL = "https://YOUR-RENDER-SERVICE.onrender.com";

const statusEl = document.querySelector("#status");
const resultEl = document.querySelector("#result");
const button = document.querySelector("#go");

button.addEventListener("click", async () => {
  const payload = {
    time: Number(document.querySelector("#time").value),
    distance: Number(document.querySelector("#distance").value),
    budget: document.querySelector("#budget").value,
    group: document.querySelector("#group").value
  };

  statusEl.textContent = "Finding a sidequest...";
  resultEl.classList.add("hidden");
  button.disabled = true;

  try {
    const response = await fetch(`${BACKEND_URL}/recommend`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "The backend returned an error.");

    const s = data.sidequest;
    document.querySelector("#category").textContent = (s.category || "Sidequest").toUpperCase();
    document.querySelector("#title").textContent = s.title;
    document.querySelector("#description").textContent = s.description;
    document.querySelector("#address").textContent = s.address;
    document.querySelector("#meta").textContent = `${s.difficulty} · ${s.time_hours} hr · ${s.distance_miles} mi · ${s.cost}`;
    document.querySelector("#uniqueness").textContent = s.uniqueness;
    document.querySelector("#niche").textContent = s.niche;
    document.querySelector("#accessibility").textContent = s.accessibility;
    document.querySelector("#isolation").textContent = s.isolation;

    statusEl.textContent = `Found ${data.match_count} matching sidequest(s).`;
    resultEl.classList.remove("hidden");
  } catch (error) {
    statusEl.textContent = `Error: ${error.message}`;
  } finally {
    button.disabled = false;
  }
});
