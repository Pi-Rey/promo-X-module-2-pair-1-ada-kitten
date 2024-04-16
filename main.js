"use strict";

const jsList = document.querySelector(".js-list");

/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */
const kittenData_1 = {
  image: "https://dev.adalab.es/gato-siames.webp",
  name: "Anastacio",
  desc: " Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.",
  race: "Siamés",
};

// const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
// const kittenOneName = 'Anastacio';
// const kittenOneDesc =
//   ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
// const kittenOneRace = 'Siamés';

const kittenData_2 = {
  image: "https://dev.adalab.es/sphynx-gato.webp",
  name: "Fiona",
  desc: ` Produce fascinación y curiosidad. Exótico, raro, bello, extraño...
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.`,
  race: "Sphynx",
};

// const kittenSecondImage = "https://dev.adalab.es/sphynx-gato.webp";
// const kittenSecondName = 'Fiona';
// const kittenSecondDesc =
//   ` Produce fascinación y curiosidad. Exótico, raro, bello, extraño...
//   hasta con pinta de alienígena han llegado a definir a esta raza
//   gatuna que se caracteriza por la «ausencia» de pelo.`;
// const kittenSecondRace = 'Sphynx';

const kittenData_3 = {
  image: "https://dev.adalab.es/maine-coon-cat.webp",
  name: "Cielo",
  desc: ` Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.`,
  race: "Maine Coon",
};

// const kittenThirdImage = "https://dev.adalab.es/maine-coon-cat.webp";
// const kittenThirdName = 'Cielo';
// const kittenThirdDesc =
//   ` Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
//   bella mirada se ha convertido en una de sus señas de identidad.
//   Sus ojos son grandes y las orejas resultan largas y en punta.`;
// const kittenThirdRace = 'Maine Coon';

const kittenData = {
  image: " ",
  name: " ",
  desc: " ",
  race: " ",
};

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

console.log(kittenData_1);

console.log(kittenDataList);

function renderKiteen(kittenData)
{
  jsList.innerHTML += `<li class="card">
<article>
<img
class="card_img"
src="${kittenData.image}"
alt="sphynx-cat"
/>
<h3 class="card_title">${kittenData.name}</h3>
<h4 class="card_race">${kittenData.race}</h4>
<p class="card_description js_description_two">
${kittenData.desc}
</p>
</article>
</li>`;
}

function renderKittenList(kittenDataList) {
  jsList.innerHTML = "";

  for (let i = 0; i < kittenDataList.length; i++) {
    renderKiteen(kittenDataList[i]);
  }
}


renderKittenList(kittenDataList);
console.log(jsList);
/*function renderKiteen(kittenData) {
  // jsList.innerHTML +=  `<li class="card">
  // <article>
  //   <img
  //   class="card_img"
  //   src="${url}"
  //   alt="sphynx-cat"
  // />
  // <h3 class="card_title">${name}</h3>
  // <h4 class="card_race">${race}</h4>
  // <p class="card_description js_description_two">
  // ${desc}
  // </p>
  // </article>
  // </li>`;

  const cards = `<li class="card">
  <article>
    <img
    class="card_img"
    src="${kittenData.image}"
    alt="sphynx-cat"
  />
  <h3 class="card_title">${kittenData.name}</h3>
  <h4 class="card_race">${kittenData.race}</h4>
  <p class="card_description js_description_two">
  ${kittenData.desc}
  </p>
  </article>
  </li>`;
  return cards;
}*/

/*const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src=${kittenOneImage}
    alt="gatito"
  />
  <h3 class="card_title">${kittenOneName}</h3>
  <h4 class="card_race">${kittenOneRace}</h4>
  <p class="card_description js_description_one">${kittenOneDesc}
   </p>
</article>
</li>`;*/

/*const kittenTwo = `<li class="card">
<article>
  <img
  class="card_img"
  src="${kittenSecondImage}"
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenSecondName}</h3>
<h4 class="card_race">${kittenSecondRace}</h4>
<p class="card_description js_description_two">
${kittenSecondDesc}
</p>
</article>
</li>`;*/

/*const kittenThree = `<li class="card">
<article>
<img
class="card_img"
src="${kittenThirdImage}"
alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenThirdName}</h3>
<h4 class="card_race">${kittenThirdRace}</h4>
<p class="card_description js_description_three">
${kittenThirdDesc}
</p>
</article>
</li>`;*/

// renderKiteen(kittenData_1);
// const kittenOne = renderKiteen(kittenOneImage, kittenOneName, kittenOneRace, kittenOneDesc);
// renderKiteen(kittenData_2);
// const kittenTwo = renderKiteen(kittenSecondImage, kittenSecondName, kittenSecondRace, kittenSecondDesc);
// renderKiteen(kittenData_3);
// const kittenThree = renderKiteen(kittenThirdImage, kittenThirdName, kittenThirdRace, kittenThirdDesc);

// jsList.innerHTML =
//   renderKiteen(kittenData_1) +
//   renderKiteen(kittenData_2) +
//   renderKiteen(kittenData_3);
console.log('Imprimer el kittenDataList ' +kittenDataList);


//viernes 05 abril
const formSection = document.querySelector(".js-new-form");
const menuPlus = document.querySelector(".js-menu");
const pictureInput = document.querySelector(".js_picture");
const nameInput = document.querySelector(".js_name");
const raceInput = document.querySelector(".js_race");
const descripInput = document.querySelector(".js_description");

// clase 10/04 creamos funciones
function showNewCatForm() {
  formSection.classList.remove("collapsed");
}

function hideNewCatForm() {
  formSection.classList.add("collapsed");
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (formSection.classList.contains("collapsed")) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

menuPlus.addEventListener("click", handleClickNewCatForm);

const btnCancel = document.querySelector(".js-btn-cancel");
btnCancel.addEventListener("click", (event) => {
  event.preventDefault();
  pictureInput.value = "";
  nameInput.value = "";
  raceInput.value = "";
  descripInput.value = "";
  formSection.classList.add("collapsed");
});

const inputSearchDesc = document.querySelector(".js_in_search_desc");
const btnSearch = document.querySelector(".js_search");
const inputSearchRace = document.querySelector(".js_in_search_race");

btnSearch.addEventListener("click", (event) => {
  event.preventDefault();
  jsList.innerHTML = "";
  // aquí hay que modificar/ da un error
  const valueDescrSearchText = inputSearchDesc.value;
  const valueRaceSearchText = inputSearchRace.value;
  const resultText = document.querySelector(".js_search_result");

  const lowerDescOne = kittenData_1.desc.toLowerCase();
  const lowerDescTwo = kittenData_2.desc.toLowerCase();
  const lowerDescThree = kittenData_3.desc.toLowerCase();
  console.log(lowerDescOne);
  const lowerRacecOne = kittenData_1.race.toLowerCase();
  const lowerRaceTwo = kittenData_2.race.toLowerCase();
  const lowerRaceThree = kittenData_3.race.toLowerCase();

  let resultCats = "";

  if (lowerDescOne.includes(valueDescrSearchText)) {
    // resultCats += kittenOne;
    jsList.innerHTML += renderKiteen(kittenData_1);
  }
  //Cambiar esto después de hacer lo de hoy martes

  if (lowerDescTwo.includes(valueDescrSearchText)) {
    // resultCats += kittenTwo;
    jsList.innerHTML += renderKiteen(kittenData_2);
  }
  if (lowerDescThree.includes(valueDescrSearchText)) {
    jsList.innerHTML += renderKiteen(kittenData_3);
    // resultCats += kittenThree;
  }

  // textos de resultado de busqueda. Me obliga a poner ambos campos
  if (valueDescrSearchText === "") {
    resultText.innerHTML = "Te falta información de la descripción ";
    console.log(" Te falta info de la descripción");
  }
  if (valueRaceSearchText === "") {
    resultText.innerHTML += "Te falta información de la raza";
    console.log("Te fala información de la raza");
  }

  if (lowerRacecOne.includes(valueRaceSearchText)) {
    // resultCats += kittenOne;
    jsList.innerHTML += renderKiteen(kittenData_1);
  }
  //Cambiar esto después de hacer lo de hoy martes

  if (lowerRaceTwo.includes(valueRaceSearchText)) {
    // resultCats += kittenTwo;
    jsList.innerHTML += renderKiteen(kittenData_2);
  }
  if (lowerRaceThree.includes(valueRaceSearchText)) {
    jsList.innerHTML += renderKiteen(kittenData_3);
    // resultCats += kittenThree;
  }
  // jsList.innerHTML = resultCats
});

const btnNew = document.querySelector(".js-btn-add");

//modifica el evento para cumplir una función manejadora
function addNewKitten(event) {
  event.preventDefault();
  const valueImg = pictureInput.value;
  const valueName = nameInput.value;
  const valueRace = raceInput.value;
  const valueDesc = descripInput.value;

  const kittenTemp = {
    image: valueImg,
    name: valueName,
    desc: valueDesc,
    race: valueRace,
  };
  //  jsList.innerHTML += renderKiteen (valueImg, valueName, valueRace,valueDesc);
  jsList.innerHTML += renderKiteen(kittenTemp);

  /*jsList.innerHTML += `<li class="card">
  <article>
    <img
    class="card_img"
    src="${valueImg}"
    alt="sphynx-cat"
  />
  <h3 class="card_title">${valueName}</h3>
  <h4 class="card_race">${valueRace}</h4>
  <p class="card_description js_description_two">
  ${valueDesc}
  </p>
  </article>
  </li>`;
  console.log(jsList);
  return jsList;*/
}
btnNew.addEventListener("click", addNewKitten);
console.log('Imprimer jsList: ' + jsList);
