import { ICommand } from "../typings";
import UserService from "../structures/userService";

export default class StartCommand implements ICommand {
    public nameCommand = '/start';
    constructor (private userService: UserService) {};

    execute(): void {
        console.log('Привет от Бота, начинаем работу');

        this.userService.register();
    }
}
