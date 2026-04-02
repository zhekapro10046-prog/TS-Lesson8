// Devices 

import { ICommand } from "../index_folder/typings";

class Light {
    static turnOff(): any {
        throw new Error("Method not implemented.");
    }
    static turnOn(): any {
        throw new Error("Method not implemented.");
    }
    private isOn: boolean = false;
     
    turnOn(): void {
        this.isOn = true;
        console.log('Лампочка включена');
    }

    turnOff(): void {
        this.isOn = false;
        console.log('Лампочка выключена');
    }
}

class MusicPlayer {
    static play(): any {
        throw new Error("Method not implemented.");
    }
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

// commands
import { ICommand2 } from "./typings/homework";

class LightOnCommand implements ICommand2 {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }
    

    execute(): void {
        this.light.turnOn();
    }
}

class LightOffCommand implements ICommand2 {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }
    
    

    execute(): void {
        this.light.turnOff();
        
    }
}

class MusicPlayCommand implements ICommand2 {
    private musicPlayer: MusicPlayer; 
        constructor (musicPlay: MusicPlayer) {
            this.musicPlayer = musicPlay;
        }

        execute(): void {
            this.musicPlayer.play
        }
}

class MusicStopCommand implements ICommand2 {
    private musicPlayer: MusicPlayer; 
        constructor (musicPlay: MusicPlayer) {
            this.musicPlayer = musicPlay;
        }

        execute(): void {
            this.musicPlayer.stop
        }
}
// remote control 
class RemoteControl  {
    static setCommand(arg0: string, arg1: any) {
        throw new Error("Method not implemented.");
    }
    static pressButton(arg0: string) {
        throw new Error("Method not implemented.");
    }
    private buttons: Map <string, ICommand2> = new Map();
    
    constructor() {
        this.buttons = new Map();
    }
    
    setCommand(buttonId: string, command: ICommand2): void {
        this.buttons.set(buttonId, command);
    }

    pressButton(buttonId: string): void {
        const command = this.buttons.get(buttonId);

        if (command) {
            command.execute();
        }else {
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