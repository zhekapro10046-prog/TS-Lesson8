"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightOffCommand = void 0;
class LightOnCommand {
    light;
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.turnOn();
    }
}
exports.default = LightOnCommand;
class LightOffCommand {
    light;
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.turnOff();
    }
}
exports.LightOffCommand = LightOffCommand;
