import React from 'react';

function alignIcon(icon) {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.justifyContent = "center";

  const iconElement = document.createElement("span");
  iconElement.classList.add("MuiIcon-root");
  iconElement.classList.add(icon);

  container.appendChild(iconElement);
  return container;
}