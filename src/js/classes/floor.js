import {Actor, CollisionType, Vector} from "excalibur";
import {Settings} from "../settings.js";

/**
 * Floor/floor class
 *
 * New instance creates fixed floor that interacts with Excalibur
 * gravity physics (Collisiontype.Fixed and active)
 *
 * param:
 */

export class Floor extends Actor{
    constructor(height) {
        super({
            width: Settings.screenWidth,
            height: height,
            y: 0,
            anchor: new Vector(0, 0),

            color:ex.Color.Black,
        })
        this.graphics.opacity = 1
        this.body.collisionType = CollisionType.Fixed
    }
}