import { ICommand } from "../typings";



export default class BOT {
    private commands: Map <string, ICommand> = new Map();

    registerCommands(command: ICommand){
        this.commands.set(command.nameCommand, command);
    }

    onMessage(text:string) {
        const command = this.commands.get(text);

        if (command) {
            command.execute();
        } else {
            console.log('Error command');
        }
    }
}