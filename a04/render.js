/**
 * Course: COMP 426
 * Assignment: a04
 * Author: Erica Wirth
 *
 * This script uses jQuery to build an HTML page with content taken from the
 * data defined in data.js.
 */

 // import {heroicData} from "./data.js"
 


/**
 * Given a hero object (see data.js), this function generates a "card" showing
 *     the hero's name, information, and colors.
 * @param hero  A hero object (see data.js)
 */
export const renderHeroCard = function(hero) {
    // TODO: Generate HTML elements to represent the hero
    // $(heroicData).html(heroicData);
    // TODO: Return these elements as a string, HTMLElement, or jQuery object
    // Example: return `<div>${hero.name}</div>`;

    return `<div style="background-color:${hero.backgroundColor}; color:${hero.color}">
    <h1><span>${hero.name}</span></h1>
    <h2> ${hero.subtitle}</h2>
    <h2> Alter ego: ${hero.first} ${hero.last}</h2>
    <br>
    <img src=${hero.img}>
    
    <p>${hero.firstSeen}</p>
    
    <div div style="background-color: lightgray">
        <p> ${hero.description}</p>
        </div>
            <button> Edit </button>
    </div>`;
};



/**
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function(hero) {
    // TODO: Generate HTML elements to represent the hero edit form
    // TODO: Return these elements as a string, HTMLElement, or jQuery object
    // Example: return `<form>${hero.name}</form>`;
    return `<form>
    <div class="card" style="color: ${hero.color}; background-color:${hero.backgroundColor}">
     <img src=${hero.img}>
     <br>
     <p>
        <input value=${hero.name}></input>
     </p>
     <p>
        <input type="text" value=${hero.first}></input>
     </p>
     <p>
        <input type="text" value=${hero.last}></input>
     </p>
     <p>
        <input type="text" value=${hero.subtitle}></input>
     </p>
     <p>
        <input value="${hero.firstSeen}"
     </p>
     <div>
     <textarea>${hero.description}</textarea>
     </div>
     </br>
     <button> Cancel </button>
     <button type="submit"> Submit </button>
     <br>
    </div> 
    </div>
    </form>`;
};

/**
 * Given an array of hero objects, this function converts the data into HTML and
 *     loads it into the DOM.
 * @param heroes  An array of hero objects to load (see data.js)
 */
export const loadHeroesIntoDOM = function(heroes) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    // TODO: Generate the heroes using renderHeroCard()

    // TODO: Append the hero cards to the $root element
    for (let i = 0; i < heroes.length; i++) {
        $root.append(renderHeroCard(heroes[i]));
    }

    // Pick a hero from the list at random
    const randomHero = heroes[Math.floor(Math.random() * heroes.length)];

    // TODO: Generate the hero edit form using renderHeroEditForm()
    $root.append(renderHeroEditForm(randomHero));
    // TODO: Append the hero edit form to the $root element
};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadHeroesIntoDOM(heroicData);
});
