"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BOT {
    commands = new Map();
    registerCommands(command) {
        this.commands.set(command.nameCommand, command);
    }
    onMessage(text) {
        const command = this.commands.get(text);
        if (command) {
            command.execute();
        }
        else {
            console.log('Error command');
        }
    }
}
exports.default = BOT;
