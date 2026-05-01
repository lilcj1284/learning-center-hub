// APPS (owner can add more later)
let apps = [
  { name: "Instagram", link: "https://instagram.com" },
  { name: "Roblox", link: "https://roblox.com" },
  { name: "TikTok", link: "https://tiktok.com" }
];

let history = [];

// INTRO TIMER (5 seconds)
window.onload = () => {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("app").style.display = "block";
    renderApps();
  }, 5000);
};

// SEARCH FUNCTION
function search() {
  let value = document.getElementById("searchInput").value;
  if (!value) return;

  history.push(value);
  window.open("https://www.google.com/search?q=" + value, "_blank");
}

// HISTORY
function showHistory() {
  alert(history.join("\n") || "No history yet");
}

// RENDER APPS
function renderApps() {
  let container = document.getElementById("apps");
  container.innerHTML = "";

  apps.forEach(app => {
    let div = document.createElement("div");
    div.className = "app";
    div.innerText = app.name;

    div.onclick = () => {
      window.open(app.link, "_blank");
    };

    container.appendChild(div);
  });
}

// OWNER MODE
function openOwner() {
  let code = prompt("Enter owner code:");

  if (code === "12341234") {
    let name = prompt("App name:");
    let link = prompt("App link:");

    apps.push({ name, link });
    renderApps();

    alert("App added!");
  } else {
    alert("Wrong code");
  }
}

// SETTINGS (placeholder)
function openSettings() {
  alert("Settings coming soon (themes, wallpapers, speed mode)");
}