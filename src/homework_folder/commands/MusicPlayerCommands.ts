import MusicPlayer from "../devices/MusicPlayer";
import { ICommand2 } from "../typings/homework";

export default class MusicPlayCommand implements ICommand2 {
    private musicPlayer: MusicPlayer; 
        constructor (musicPlay: MusicPlayer) {
            this.musicPlayer = musicPlay;
        }

        execute(): void {
            this.musicPlayer.play();
        }
}

export class MusicStopCommand implements ICommand2 {
    private musicPlayer: MusicPlayer; 
        constructor (musicPlay: MusicPlayer) {
            this.musicPlayer = musicPlay;
        }

        execute(): void {
            this.musicPlayer.stop();
        }
}