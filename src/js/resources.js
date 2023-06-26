import { ImageSource, Loader } from "excalibur";
import playerImage from "/src/img/character/playerRun.png";
import background from "/src/img/background/background.png";

let Resources = {
    Player: new ImageSource(playerImage),
    Background: new ImageSource(background)
};

const ResourceLoader = new Loader([Resources.Player, Resources.Background]);

export { Resources, ResourceLoader };