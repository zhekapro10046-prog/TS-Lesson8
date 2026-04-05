"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MusicPlayer {
    isPlaying = false;
    play() {
        this.isPlaying = true;
        console.log('Колонка включена');
    }
    stop() {
        this.isPlaying = false;
        console.log('Колонка выключена');
    }
}
exports.default = MusicPlayer;
