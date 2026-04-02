import { ICommand } from "../typings";
import UserService from "../structures/userService";

export default class BalanceCommand implements ICommand {
    public nameCommand = '/balance';
    constructor (private userService: UserService) {};

    execute(): void {
        this.userService.showBalance();
    }
} 