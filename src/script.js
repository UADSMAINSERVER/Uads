const loreEntries = [
  "The Hermit vanished into the Void. His silence echoes.",
  "Node-01 was forged from frostbitten relics and student dreams.",
  "Shadowfall collapsed—but its ruins still whisper.",
  "Faction Tiger Unit breached the perimeter. UA retaliated with Arctic Doctrine.",
  "Every hosting ritual begins with a torch ring and a vow."
];

function revealLore() {
  const loreDrop = document.getElementById("loreDrop");
  const randomLore = loreEntries[Math.floor(Math.random() * loreEntries.length)];
  loreDrop.textContent = randomLore;
}
