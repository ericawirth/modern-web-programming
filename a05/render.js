/**
 * Course: COMP 426
 * Assignment: a05
 * Author: <type your name here>
 *
 * This script uses jQuery to build an HTML page with content taken from the
 * data defined in data.js.
 */



/**
 * Given a hero object (see data.js), this function generates a "card" showing
 *     the hero's name, information, and colors.
 * @param hero  A hero object (see data.js)
 */
export const renderHeroCard = function(hero) {
    // TODO: Copy your code from a04 to render the hero card

    return `<div id=${hero.id}><p style="color:${hero.color}"><h1>${hero.name}</h1></p>
    <h2> Alter Ego: ${hero.first} ${hero.last}</h2>
    <br>
    <img src=${hero.img}>
    
    
    <div div style="background-color:${hero.backgroundColor}">
        <h2><span>${hero.subtitle}</span></h2>
        <br>
        <span>${hero.firstSeen}</span>
        <p> ${hero.description}</p>
        </div>
            <button type="button" class="edit">Edit</button>
    </div>`;
};



/**
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function(hero) {
    // TODO: Copy your code from a04 to render the hero edit form

    return `<form id=${hero.id}>
     <br>
     <p>
        Hero: <input type="text" id="name" value=${hero.name}>
     </p>
     <p>
        First Name: <input type="text" id="first" value=${hero.first}>
     </p>
     <p>
        Last Name: <input type="text" id="last" value=${hero.last}>
     </p>
     <p>
        First Seen: <textarea rows="1" cols="50" id="firstSeen">${hero.firstSeen}</textarea>
     </p>
     <div>
        Description: <textarea rows="3" cols="50" id="description">${hero.description}</textarea>
     </div>
     </br>
     <button type="submit" class="submit">Save</button>
     <button type="button" class="cancel">Cancel</button>
     <br>
    </form>`;
};



/**
 * Handles the JavaScript event representing a user clicking on the "edit"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditButtonPress = function(event) {
    // TODO: Render the hero edit form for the clicked hero and replace the
    //       hero's card in the DOM with their edit form instead

    let id = event.target.parentNode.id;
    let currentHero = heroicData[0];

    for (let i = 0; i < heroicData.length; i++) {
        if (heroicData[i].id == id) {
            currentHero = heroicData[i];
            break;
        }
    }

    $('#'+id).replaceWith(renderHeroEditForm(currentHero));
    $("button.submit").on("click", handleEditFormSubmit);
    $("button.cancel").on("click", handleCancelButtonPress);
};



/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleCancelButtonPress = function(event) {
    // TODO: Render the hero card for the clicked hero and replace the
    //       hero's edit form in the DOM with their card instead

    let id = event.target.parentNode.id;
    let currentHero = heroicData[0];

    for (let i = 0; i < heroicData.length; i++) {
        if (heroicData[i].id == id) {
            currentHero = heroicData[i];
            break;
        }
    }

    $('#'+id).replaceWith(renderHeroCard(currentHero));
    $("button.edit").on("click", handleEditButtonPress);
    

};



/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditFormSubmit = function(event) {
    // TODO: Render the hero card using the updated field values from the
    //       submitted form and replace the hero's edit form in the DOM with
    //       their updated card instead

    event.preventDefault();

    let id = event.target.parentNode.id;
    let count = 0;

    for (let i = 0; i < heroicData.length; i++) {
        if (heroicData[i].id == id) {
            count = i;
            break;
        }
    }

    let currentName = $('#name').val();
    let currentFirst = $('#first').val();
    let currentLast = $('#last').val();
    let currentSeen = $('#firstSeen').val();
    currentSeen = new Date(currentSeen);
    currentSeen = currentSeen.toUTCString();
    currentSeen = new Date(currentSeen);
    let currentDescription = $('#description').val();
    
    heroicData[count].name = currentName;
    heroicData[count].first = currentFirst;
    heroicData[count].last = currentLast;
    heroicData[count].firstSeen = currentSeen;
    heroicData[count].description = currentDescription;

    $('#'+id).replaceWith(renderHeroCard(heroicData[count]));
    $("button.edit").on("click", handleEditButtonPress);

};



/**
 * Given an array of hero objects, this function converts the data into HTML,
 *     loads it into the DOM, and adds event handlers.
 * @param  heroes  An array of hero objects to load (see data.js)
 */
export const loadHeroesIntoDOM = function(heroes) {
    // Grab a jQuery reference to the root HTML element
    const $root = $('#root');

    // TODO: Generate the heroes using renderHeroCard()
    //       NOTE: Copy your code from a04 for this part

    // TODO: Append the hero cards to the $root element
    //       NOTE: Copy your code from a04 for this part

    for (let i = 0; i < heroes.length; i++) {
        $root.append(renderHeroCard(heroes[i]));
    }
    // TODO: Use jQuery to add handleEditButtonPress() as an event handler for
    //       clicking the edit button

    $("#root").on("click", ".edit", handleEditButtonPress);
    // TODO: Use jQuery to add handleEditFormSubmit() as an event handler for
    //       submitting the form

    $("body").on("click", "button.submit", handleEditFormSubmit);
    // TODO: Use jQuery to add handleCancelButtonPress() as an event handler for
    //       clicking the cancel button

    $("body").on("click", "button.cancel", handleCancelButtonPress);
};



/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
    loadHeroesIntoDOM(heroicData);
});
