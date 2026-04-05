"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Light {
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
exports.default = Light;
