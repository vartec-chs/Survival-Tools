import { Player } from "mojang-minecraft";
import { transLevelUiSend } from "./commands/transfer-level.js";

interface ICommand {
    id: number
    name: string
    alises: Array<string>
    description?: string
}


export default function commandList(): Array<ICommand> {
    const commandsList: Array<ICommand> = [
        {
            id: 1,
            name: 'test',
            alises: ["test"],
            description: ""
        },
        {
            id: 2,
            name: 'test',
            alises: ["test"],
            description: ""
        }
    ] 
    return commandsList
}


