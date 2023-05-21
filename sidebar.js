const iconoPaExpandir = document.getElementById(
  "expandir_icon"
);
let desaparecerName = document.querySelector(
  ".name_of_section"
);
let NAME_OF_GROUP = "our groups";
// console.log(iconoPaExpandir);
let sidebarContainer = document.querySelector(
  ".sidebarLefContainer"
);
window.onload = () => {
  let elementoObjetivo = document.querySelector(
    ".name_of_section"
  );
  elementoObjetivo.remove();
  // console.log(elementoObjetivo);
};
iconoPaExpandir.addEventListener("click", () => {
  // console.log(iconoPaExpandir.classList);
  if (iconoPaExpandir.classList.length < 1) {
    iconoPaExpandir.classList.add(
      "girar_to_right"
    );
    sidebarContainer.style.gridTemplate =
      "100px 100px 100px 100px /50vw 40px";

    setTimeout(() => {
      desaparecerName.innerHTML = NAME_OF_GROUP;
    }, 500);
  } else {
    iconoPaExpandir.classList.remove(
      "girar_to_right"
    );

    // desaparecerName.style.visibility = "hidden";
    desaparecerName.innerHTML = " ";
    sidebarContainer.style.gridTemplate =
      "100px 100px 100px 100px /12vw 40px";
  }
});
