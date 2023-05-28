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
  const collection = document.querySelectorAll(
    ".name_of_section"
  );

  for (let i = 0; i < collection.length; i++) {
    collection[i].remove();
  }

  // elementoObjetivo.classList.add("oculto");
};
iconoPaExpandir.addEventListener("click", () => {
  // console.log(iconoPaExpandir.classList);
  if (iconoPaExpandir.classList.length < 1) {
    setTimeout(() => {
      createSpan1();
      createSpan2();
      createSpan3();
      createSpan4();
      createSpan5();
    }, 400);
    iconoPaExpandir.classList.add("girar_to_right");
    sidebarContainer.style.gridTemplate =
      "100px 100px 100px 100px /50vw";

    setTimeout(() => {
      desaparecerName.innerHTML = NAME_OF_GROUP;
    }, 500);
  } else {
    const collection = document.querySelectorAll(
      ".name_of_section"
    );

    for (let i = 0; i < collection.length; i++) {
      collection[i].remove();
    }
    iconoPaExpandir.classList.remove("girar_to_right");

    // desaparecerName.style.visibility = "hidden";
    desaparecerName.innerHTML = " ";
    sidebarContainer.style.gridTemplate =
      "100px 100px 100px 100px /12vw";
  }
});
function createSpan1() {
  const span1 = document.createElement("span");
  span1.className = "name_of_section";
  span1.innerHTML = "";
  let sectionElegida = document.querySelectorAll(
    ".childrenSidebarLef"
  )[0];
  sectionElegida.appendChild(span1);
  // test of sectiontion
  // console.log(sectionElegida);
}
function createSpan2() {
  const span = document.createElement("span");
  span.className = "name_of_section";
  span.innerHTML = "our restaurants";
  let sectionElegida = document.querySelectorAll(
    ".childrenSidebarLef"
  )[1];
  sectionElegida.appendChild(span);
  // test of section
  // console.log(sectionElegida);
}
function createSpan3() {
  const span = document.createElement("span");
  span.className = "name_of_section";
  span.innerHTML = "our favorites";
  let sectionElegida = document.querySelectorAll(
    ".childrenSidebarLef"
  )[2];
  sectionElegida.appendChild(span);
  // test of section
  // console.log(sectionElegida);
}
function createSpan4() {
  const span = document.createElement("span");
  span.className = "name_of_section";
  span.innerHTML = "our events";
  let sectionElegida = document.querySelectorAll(
    ".childrenSidebarLef"
  )[3];
  sectionElegida.appendChild(span);
  // test of section
  // console.log(sectionElegida);
}
function createSpan5() {
  const span = document.createElement("span");
  span.className = "name_of_section";
  span.innerHTML = "our events";
  let sectionElegida = document.querySelectorAll(
    ".childrenSidebarLef"
  )[4];
  sectionElegida.appendChild(span);
  // test of section
  // console.log(sectionElegida);
}
// reemplazando vista2
const vista2 = document.querySelector("#calendario");
console.log(vista2);
