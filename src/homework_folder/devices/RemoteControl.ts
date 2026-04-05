import { ICommand2 } from "../typings/homework";

export default class RemoteControl  {
        private buttons: Map <string, ICommand2> = new Map();
    
    constructor() {}
    
    setCommand(buttonId: string, command: ICommand2): void {
        this.buttons.set(buttonId, command);
    }

    pressButton(buttonId: string): void {
        const command = this.buttons.get(buttonId);

        if (command) {
            command.execute();
        }else {
            console.log(`Кнопка с данным ID "${buttonId}" не назначена или не найдена`);
        }
    }
    
   
}