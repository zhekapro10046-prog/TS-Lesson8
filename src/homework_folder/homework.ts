import LightOnCommand, { LightOffCommand } from "./commands/LightCommands";
import MusicPlayCommand from "./commands/MusicPlayerCommands";
import Light from "./devices/Light";
import MusicPlayer from "./devices/MusicPlayer";
import RemoteControl from "./devices/RemoteControl";
import { ICommand2 } from "./typings/homework";




const light = new Light();
const musicPlayer = new MusicPlayer();
const remoteControl = new RemoteControl();

remoteControl.setCommand('1', new LightOnCommand(light));
remoteControl.setCommand('2', new LightOffCommand(light));
remoteControl.setCommand('3', new MusicPlayCommand(musicPlayer));

remoteControl.pressButton('1');
remoteControl.pressButton('2');
remoteControl.pressButton('3');