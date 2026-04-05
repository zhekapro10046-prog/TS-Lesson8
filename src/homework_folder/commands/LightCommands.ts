import Light from "../devices/Light";
import { ICommand2 } from "../typings/homework";

export default class LightOnCommand implements ICommand2 {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }
    

    execute(): void {
        this.light.turnOn();
    }
}

export class LightOffCommand implements ICommand2 {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }
    
    execute(): void {
        this.light.turnOff();
        
    }
}