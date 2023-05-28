let mainApp = document.querySelector("#main");
let sections = document.querySelectorAll(
  ".childrenSidebarLef"
);
for (let i = 1; i < sections.length; i++) {
  sections[i].id = `id${i}`;
  console.log(sections[i].id);
}
let main1 = document.getElementById("id1");
let main2 = document.getElementById("id2");
let main3 = document.getElementById("id3");
let main4 = document.getElementById("id4");

console.log(mainApp);
console.log("pu");

main1.onclick = () => {
  mainApp.innerHTML = `
  <h1>content1</h1>
  `;
};
main2.onclick = () => {
  mainApp.innerHTML = `
  <h1>content2</h1>
  `;
};
main3.onclick = () => {
  mainApp.innerHTML = `
  <h1>content3</h1>
  `;
};
main4.onclick = () => {
  mainApp.innerHTML = `
  <h1>content4</h1>
  `;
};
