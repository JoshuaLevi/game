import {Actor, Animation, CollisionType, Input, range, SpriteSheet, Vector} from "excalibur";
import {Resources} from "../resources.js";


export class Player extends Actor {

    constructor() {
        super()
        const runSheet = SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: { rows: 1, columns: 21, spriteWidth: 96, spriteHeight: 96 }
        })
        const idle = runSheet.sprites[0] // geen animatie
        const runLeft = Animation.fromSpriteSheet(runSheet, range(1, 10), 80)
        const runRight = Animation.fromSpriteSheet(runSheet, range(11, 20), 80)

        this.graphics.add("idle", idle)
        this.graphics.add("runleft", runLeft)
        this.graphics.add("runright", runRight)

        this.graphics.use(idle)
    }
    onInitialize(engine) {
        this.pos = new Vector(100,530)
        this.vel = new Vector(0,0)

    }
    onPreUpdate(engine) {
        let xspeed = 0
        let yspeed = 0
        this.graphics.use('idle')

        if (engine.input.keyboard.wasPressed(Input.Keys.W)) {
            yspeed = -5000
            this.graphics.use('runright')
        }
        if (engine.input.keyboard.wasPressed(Input.Keys.S)) {
            yspeed = 5000
            this.graphics.use('runright')
        }

        if (engine.input.keyboard.isHeld(Input.Keys.A) || engine.input.keyboard.isHeld(Input.Keys.Left)) {
            xspeed = xspeed -300
            this.graphics.use('runleft')
        }
        if (engine.input.keyboard.isHeld(Input.Keys.D) || engine.input.keyboard.isHeld(Input.Keys.Right)) {
            xspeed = xspeed + 300
            this.graphics.use('runright')
        }

        this.vel = new Vector(xspeed, yspeed)
    }

}