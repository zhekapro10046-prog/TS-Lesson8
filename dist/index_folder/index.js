"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const balance_1 = __importDefault(require("./commands/balance"));
const help_1 = __importDefault(require("./commands/help"));
const start_1 = __importDefault(require("./commands/start"));
const client_1 = __importDefault(require("./structures/client"));
const userService_1 = __importDefault(require("./structures/userService"));
const userService = new userService_1.default();
const bot = new client_1.default();
const commands = [
    new start_1.default(userService),
    new balance_1.default(userService),
    new help_1.default()
];
for (const command of commands) {
    bot.registerCommands(command);
}
bot.onMessage('/balance');
