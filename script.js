"use strict";

window.addEventListener("load", init);

const scene4A = {
    id: "scene4A",
    title: /*html*/ ` <h1>You've found the relic!.</h1>`,
    description: /*html*/ `<h2>You escape with your new found treasure. Congratulations!</h2>`,
    choices: [],
};

const scene4B = {
    id: "scene4B",
    title: /*html*/ ` <h1>The glider falls apart as you're gliding.</h1>`,
    description: /*html*/ `<h2>You fall to your death. THE END</h2>`,
    choices: [],
};

const scene4C = {
    id: "scene4C",
    title: /*html*/ ` <h1>The terrible beasts sees you.</h1>`,
    description: /*html*/ `<h2>It tears you apart. THE END</h2>`,
    choices: [],
};

const scene3A = {
    id: "scene3A",
    title: /*html*/ ` <h1>You're standing in front of the dark cave.</h1>`,
    description: /*html*/ `<h2>It's getting dark, push forward or take a rest?</h2>`,
    choices: [
        { btnText: "Torch - Light a torch to explore deeper.", nextScene: scene4A },
        { btnText: "Rest - Take a break; maybe it's safe here.", nextScene: scene4C },
    ],
};

const scene3B = {
    id: "scene3B",
    title: /*html*/ ` <h1>You hear the approaching creature.</h1>`,
    description: /*html*/ `<h2>What do you do?</h2>`,
    choices: [
        { btnText: "Hide - Hide from the approaching creature.", nextScene: scene4C },
        { btnText: "Follow - Follow the tracks to their source.", nextScene: scene4A },
    ],
};

const scene3C = {
    id: "scene3C",
    title: /*html*/ ` <h1>You try fight through the storm.</h1>`,
    description: /*html*/ `<h2>You capsize and drown, THE END</h2>`,
    choices: [],
};

const scene3D = {
    id: "scene3D",
    title: /*html*/ ` <h1>You arrive at the island.</h1>`,
    description: /*html*/ `<h2>You see an X in the sand, and a path leading further inwards</h2>`,
    choices: [
        { btnText: "Dig - Unearth something in the sand.", nextScene: scene4A },
        { btnText: "Explore - Venture into the dense jungle.", nextScene: scene4C },
    ],
};

const scene3E = {
    id: "scene3E",
    title: /*html*/ ` <h1>You're gliding through the air.</h1>`,
    description: /*html*/ `<h2>You aim for the forest or the riverbank.</h2>`,
    choices: [
        { btnText: "Forest - Land in a dense forest.", nextScene: scene4B },
        { btnText: "Riverbank - Glide to the riverbank.", nextScene: scene4B },
    ],
};

const scene3F = {
    id: "scene3F",
    title: /*html*/ ` <h1>You try to climb back down the cliff.</h1>`,
    description: /*html*/ `<h2>You lose you footing and fall to your death. THE END</h2>`,
    choices: [],
};

const scene2A = {
    id: "scene2A",
    title: /*html*/ ` <h1>You're standing in front of the trail.</h1>`,
    description: /*html*/ `<h2>You see a dark cave and some fresh animal tracks</h2>`,
    choices: [
        { btnText: "Cave - Enter the dark cave.", nextScene: scene3A },
        { btnText: "Tracks - Follow the fresh animal tracks.", nextScene: scene3B },
    ],
};

const scene2B = {
    id: "scene2B",
    title: /*html*/ ` <h1>You take the raft down the river.</h1>`,
    description: /*html*/ `<h2>A storm is brewing and you see an island in the distance.</h2>`,
    choices: [
        { btnText: "Storm - Head into the storm.", nextScene: scene3C },
        { btnText: "Island - Paddle to the small misty island.", nextScene: scene3D },
    ],
};

const scene2C = {
    id: "scene2C",
    title: /*html*/ ` <h1>You climb up to the top of the cliff.</h1>`,
    description: /*html*/ `<h2>You see a glider, it looks rickity. You can also climb down with your bare hands.</h2>`,
    choices: [
        { btnText: "Glide - Use a glider to soar down.", nextScene: scene3E },
        { btnText: "Climb down - Try to climb back down.", nextScene: scene3F },
    ],
};

const scene1 = {
    id: "scene1",
    title: /*html*/ ` <h1>The Lost Relic - Choose your own adventure</h1>`,
    description: /*html*/ `<h2>You’re an adventurer seeking a mythical relic hidden deep in the jungle. Choose wisely, as every path leads to a
            unique
            fate.</h2>`,
    choices: [
        { btnText: "Trail - Follow the overgrown jungle trail", nextScene: scene2A },
        { btnText: "River - Take the raft down a mysterious river.", nextScene: scene2B },
        { btnText: "Cliff - Climb a steep rock face to get a better view.", nextScene: scene2C },
    ],
};

const scenes = [
    scene1,
    scene2A,
    scene2B,
    scene2C,
    scene3A,
    scene3B,
    scene3C,
    scene3D,
    scene3E,
    scene3F,
    scene4A,
    scene4B,
    scene4C,
];

const scenesById = new Map();

function createSceneMap() {
    for (const scene of scenes) {
        scenesById.set(scene.id, scene);
    }
    console.group(scenesById);
}

function showScene(scene) {
    const sceneDiv = document.querySelector("#scene");

    sceneDiv.innerHTML = "";

    const html = /*html*/ `
    <h1>${scene.title}</h1>
    <h2>${scene.description}</h2>
    <div id="buttons">
    
    ${scene.choices
        .map((choice) => {
            return /*html*/ `
                <button id=${choice.nextScene ? choice.nextScene.id : null}>${choice.btnText}</button>`;
        })
        .join("")}
    </div>`;

    sceneDiv.innerHTML = html;

    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
            console.log(button.id);
            const nextScene = scenesById.get(button.id);
            console.log(nextScene);

            showScene(nextScene);
        });
    });
}

function init() {
    createSceneMap();
    showScene(scene1);
}
