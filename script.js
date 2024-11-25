"use strict";

window.addEventListener("load", init);
const scene2A = {
    id: "scene2A",
    title: /*html*/ ` <h1>You're standing in front of the trail.</h1>`,
    description: /*html*/ `<h2>You see a dark cave and some fresh animal tracks</h2>`,
    choices: [{ btnText: "Cave - Enter the dark cave." }, { btnText: "Tracks - Follow the fresh animal tracks." }],
};

const scene2B = {
    id: "scene2B",
    title: /*html*/ ` <h1>You take the raft down the river.</h1>`,
    description: /*html*/ `<h2>A storm is brewing and you see an island in the distance.</h2>`,
    choices: [{ btnText: "Storm - Head into the storm." }, { btnText: "Island - Paddle to the small misty island." }],
};

const scene2C = {
    id: "scene2C",
    title: /*html*/ ` <h1>You climb up to the top of the cliff.</h1>`,
    description: /*html*/ `<h2>You see a glider, it looks rickity. You can also climb down with your bare hands.</h2>`,
    choices: [
        { btnText: "Glide - Use a glider to soar down." },
        { btnText: "Lose Grip - Lose your footing and risk a fall." },
    ],
};

const scene = {
    title: /*html*/ ` <h1>The Lost Relic - Choose your own adventure</h1>`,
    description: /*html*/ `<h2>You’re an adventurer seeking a mythical relic hidden deep in the jungle. Choose wisely, as every path leads to a
            unique
            fate.</h2>`,
    choices: [
        { btnText: "Trail - Follow the overgrown jungle trail", nextScene: "scene2A" },
        { btnText: "River - Take the raft down a mysterious river.", nextScene: "scene2B" },
        { btnText: "Cliff - Climb a steep rock face to get a better view.", nextScene: "scene2C" },
    ],
};

const scenes = [scene, scene2A, scene2B, scene2C];

const scenesById = new Map();

function createSceneMap() {
    for (const scene of scenes) {
        scenesById.set(scene.id, scene);
    }
}



function showScene(scene) {
    // find #scenes
    const sceneDiv = document.querySelector("#scene");

    sceneDiv.innerHTML = "";

    const html = /*html*/ `
    <h1>${scene.title}</h1>
    <h2>${scene.description}</h2>
    <div id="buttons">
    ${scene.choices
        .map((choice) => {
            return `<button>${choice.btnText}</button>`;
        })
        .join("")}
    </div>`;

    sceneDiv.innerHTML = html;
}

function init() {
    showScene(scene2A);
}
