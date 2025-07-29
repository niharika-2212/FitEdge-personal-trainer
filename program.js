// program.js
fetch("./assets/data/programs.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("programs");

    data.programs.forEach(program => {
      const card = document.createElement("div");
      card.className = "programs-card";

      card.innerHTML = `
        <div class="section-subheading">${program.name}</div>
        <div class="card-subheading">${program.description}</div>
        <div class="price">₹${program.price.toLocaleString()}</div>
        <div class="card-subheading">${program.billing}</div>
        <div class="features">
          ${program.features.map(feature => `<div>${feature}</div>`).join("")}
        </div>
        <button class="button-1">Choose plan</button>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error loading programs:", err));