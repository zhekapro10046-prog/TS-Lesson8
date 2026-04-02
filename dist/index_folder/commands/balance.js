"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BalanceCommand {
    userService;
    nameCommand = '/balance';
    constructor(userService) {
        this.userService = userService;
    }
    ;
    execute() {
        this.userService.showBalance();
    }
}
exports.default = BalanceCommand;
