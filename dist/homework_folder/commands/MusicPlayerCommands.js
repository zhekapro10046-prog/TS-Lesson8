"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicStopCommand = void 0;
class MusicPlayCommand {
    musicPlayer;
    constructor(musicPlay) {
        this.musicPlayer = musicPlay;
    }
    execute() {
        this.musicPlayer.play();
    }
}
exports.default = MusicPlayCommand;
class MusicStopCommand {
    musicPlayer;
    constructor(musicPlay) {
        this.musicPlayer = musicPlay;
    }
    execute() {
        this.musicPlayer.stop();
    }
}
exports.MusicStopCommand = MusicStopCommand;
