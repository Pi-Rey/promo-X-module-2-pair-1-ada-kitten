'use strict';

const jsList = document.querySelector('.js-list');

/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */

const kittenOneImage = 'https://dev.adalab.es/gato-siames.webp';
const kittenOneName = 'Anastacio';
const kittenOneDesc =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';

const kittenSecondImage = "https://dev.adalab.es/sphynx-gato.webp";
const kittenSecondName = 'Fiona';
const kittenSecondDesc =
  ` Produce fascinación y curiosidad. Exótico, raro, bello, extraño...
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.`;
const kittenSecondRace = 'Sphynx';

const kittenThirdImage = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenThirdName = 'Cielo';
const kittenThirdDesc =
  ` Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.`;
const kittenThirdRace = 'Maine Coon';

function renderKiteen(url, name, race, desc){
 jsList.innerHTML+=`<li class="card">
   <article>
     <img
     class="card_img"
     src="${url}"
     alt="sphynx-cat"
   />
   <h3 class="card_title">${name}</h3>
   <h4 class="card_race">${race}</h4>
   <p class="card_description js_description_two">
   ${desc}
   </p>
   </article>
   </li>`;
   return jsList;
 }


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

//jsList.innerHTML = kittenOne + kittenTwo + kittenThree;
renderKiteen(kittenOneImage, kittenOneName, kittenOneRace, kittenOneDesc);
renderKiteen(kittenSecondImage, kittenSecondName, kittenSecondRace, kittenSecondDesc);
renderKiteen(kittenThirdImage, kittenThirdName, kittenThirdRace, kittenThirdDesc);

//viernes 05 abril
const formSection = document.querySelector('.js-new-form');
const menuPlus = document.querySelector('.js-menu');
const pictureInput = document.querySelector('.js_picture');
const nameInput = document.querySelector('.js_name');
const raceInput = document.querySelector('.js_race');
const descripInput = document.querySelector('.js_description');

// clase 10/04 creamos funciones
function showNewCatForm (){
  formSection.classList.remove('collapsed');
}

function hideNewCatForm (){
  formSection.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (formSection.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

menuPlus.addEventListener('click', handleClickNewCatForm); 

const btnCancel = document.querySelector('.js-btn-cancel');
btnCancel.addEventListener('click', (event)=>{
    event.preventDefault();
    pictureInput.value = '';
    nameInput.value = '';
    raceInput.value = '';
    descripInput.value = '';
    formSection.classList.add('collapsed');
});

const input_search_desc = document.querySelector('.js_in_search_desc');
const btnSearch = document.querySelector('.js_search');

btnSearch.addEventListener('click', (event)=>{
    event.preventDefault();


    const descrSearchText = input_search_desc.value;
    console.log ("Esto por qué va mal? " + descrSearchText);

    if ( kittenOneDesc.includes(descrSearchText) ) {
        jsList.innerHTML = `${kittenOne}`;
      }
      //Cambiar esto después de hacer lo de hoy martes

    if( kittenSecondDesc.includes(descrSearchText) ) {
        jsList.innerHTML = `${kittenTwo}`;
      }
      if( kittenThirdDesc.includes(descrSearchText) ) {
        jsList.innerHTML = `${kittenThree}`;
      }
});

const btnNew = document.querySelector('.js-btn-add');

//modifica el evento para cumplir una función manejadora
function addNewKitten(event){
  event.preventDefault();
  const valueImg = pictureInput.value;
  const valueName = nameInput.value;
  const valueRace = raceInput.value;
  const valueDesc = descripInput.value;

  renderKiteen(valueImg, valueName, valueRace, valueDesc);

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
};
btnNew.addEventListener('click', addNewKitten);
