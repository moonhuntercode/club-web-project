const iconoPaExpandir = document.getElementById(
  "expandir_icon"
);
console.log(iconoPaExpandir);
let sidebarContainer = document.querySelector(
  ".sidebarLefContainer"
);

iconoPaExpandir.addEventListener("click", () => {
  console.log(iconoPaExpandir.classList);
  if (iconoPaExpandir.classList.length < 1) {
    iconoPaExpandir.classList.add(
      "girar_to_right"
    );
    sidebarContainer.style.gridTemplate =
      "100px 100px 100px 100px /290px 40px";
  } else {
    iconoPaExpandir.classList.remove(
      "girar_to_right"
    );

    sidebarContainer.style.gridTemplate =
      "100px 100px 100px 100px /90px 40px";
  }
});
