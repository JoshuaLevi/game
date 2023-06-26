import { Actor, Engine, Vector, Color, SpriteSheet, Physics } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Player } from "/src/js/classes/player.js";
import {Background} from "./classes/background.js";

import {Floor} from "./classes/floor.js";

export class Game extends Engine {
    constructor() {
        super();
        this.start(ResourceLoader).then(() => this.startGame());
        Physics.useArcadePhysics();

    }


    startGame() {



        this.add(new Background());


        // maak de player. de player heeft zelf een spritesheet
        this.add(new Player());
    }
}
new Game();