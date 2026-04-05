import { ICommand2 } from "../typings/homework";

export default class Light {

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