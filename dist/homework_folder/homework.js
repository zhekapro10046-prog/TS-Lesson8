"use strict";
// Devices 
Object.defineProperty(exports, "__esModule", { value: true });
class Light {
    static turnOff() {
        throw new Error("Method not implemented.");
    }
    static turnOn() {
        throw new Error("Method not implemented.");
    }
    isOn = false;
    turnOn() {
        this.isOn = true;
        console.log('Лампочка включена');
    }
    turnOff() {
        this.isOn = false;
        console.log('Лампочка выключена');
    }
}
class MusicPlayer {
    static play() {
        throw new Error("Method not implemented.");
    }
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
class LightOnCommand {
    light;
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.turnOn();
    }
}
class LightOffCommand {
    light;
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.turnOff();
    }
}
class MusicPlayCommand {
    musicPlayer;
    constructor(musicPlay) {
        this.musicPlayer = musicPlay;
    }
    execute() {
        this.musicPlayer.play;
    }
}
class MusicStopCommand {
    musicPlayer;
    constructor(musicPlay) {
        this.musicPlayer = musicPlay;
    }
    execute() {
        this.musicPlayer.stop;
    }
}
// remote control 
class RemoteControl {
    static setCommand(arg0, arg1) {
        throw new Error("Method not implemented.");
    }
    static pressButton(arg0) {
        throw new Error("Method not implemented.");
    }
    buttons = new Map();
    constructor() {
        this.buttons = new Map();
    }
    setCommand(buttonId, command) {
        this.buttons.set(buttonId, command);
    }
    pressButton(buttonId) {
        const command = this.buttons.get(buttonId);
        if (command) {
            command.execute();
        }
        else {
            console.log(`Кнопка с данным ID "${buttonId} не назначена или не найдена"`);
        }
    }
}
// Assembling
const light = new Light();
const musicPlayer = new MusicPlayer();
const remoteControl = new RemoteControl();
remoteControl.setCommand('1', Light.turnOn());
remoteControl.setCommand('2', Light.turnOff());
remoteControl.setCommand('3', MusicPlayer.play());
remoteControl.pressButton('1');
remoteControl.pressButton('2');
remoteControl.pressButton('3');
