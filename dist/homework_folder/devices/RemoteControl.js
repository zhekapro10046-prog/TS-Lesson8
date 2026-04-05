"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemoteControl {
    buttons = new Map();
    constructor() { }
    setCommand(buttonId, command) {
        this.buttons.set(buttonId, command);
    }
    pressButton(buttonId) {
        const command = this.buttons.get(buttonId);
        if (command) {
            command.execute();
        }
        else {
            console.log(`Кнопка с данным ID "${buttonId}" не назначена или не найдена`);
        }
    }
}
exports.default = RemoteControl;
