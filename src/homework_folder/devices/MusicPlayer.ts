import { ICommand2 } from "../typings/homework";

export default class MusicPlayer {
    
    private isPlaying: boolean = false;

    play(): void {
        this.isPlaying = true;
        console.log ('Колонка включена');
    }

    stop(): void {
        this.isPlaying = false;
        console.log ('Колонка выключена');
    }
} 
