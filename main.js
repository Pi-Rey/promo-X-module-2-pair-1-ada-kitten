'use strict';

const jsList = document.querySelector('.js-list');

/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */
const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description js_description_one">
            Porte elegante, su patrón de color tan característico y sus ojos
            de un azul intenso, pero su historia se remonta a Asía al menos
            hace 500 años, donde tuvo su origen muy posiblemente.
   </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<article>
  <img
  class="card_img"
  src="https://dev.adalab.es/sphynx-gato.webp"
  alt="sphynx-cat"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">Sphynx</h4>
<p class="card_description js_description_two">
  Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.
</p>
</article>
</li>`;

const kittenThree = `<li class="card">
<article>
<img
class="card_img"
src="https://dev.adalab.es/maine-coon-cat.webp"
alt="maine-coon-cat"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">Maine Coon</h4>
<p class="card_description js_description_three">
Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
bella mirada se ha convertido en una de sus señas de identidad.
Sus ojos son grandes y las orejas resultan largas y en punta.
</p>
</article>
</li>`;

jsList.innerHTML = kittenOne + kittenTwo + kittenThree;

//viernes 05 abril
const formSection = document.querySelector('.js-new-form');
const menuPlus = document.querySelector('.js-menu');
const pictureInput = document.querySelector('.js_picture');
const nameInput = document.querySelector('.js_name');
const raceInput = document.querySelector('.js_race');
const descripInput = document.querySelector('.js_description');

menuPlus.addEventListener('click', (event)=>{
    event.preventDefault;
    formSection.classList.toggle('collapsed');
});

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
    const kittenDesc1 = document.querySelector('.js_description_one');
    const kittenDesc2 = document.querySelector('.js_description_two');
    const kittenDesc3 = document.querySelector('.js_description_three');
    if (kittenDesc1.includes(descrSearchText)) {
      kittenTwo.classList.add('hidden');
      kittenThree.classList.add('hidden');
      }
      
      // if( kittenDesc2.includes(descrSearchText) ) {
      // //Completa el código
      // }
      
      // if( kittenDesc3.includes(descrSearchText) ) {
      // //Completa el código
      // }
});
