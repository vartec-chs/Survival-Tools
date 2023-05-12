import { ChatSendAfterEvent } from "@minecraft/server";
import transLevelCommand from "../commands/transfer-level.command.js";
import commandList from "../command.list.js";
import helpCommand from "../commands/help.command.js";

export default function chatEventSubscribe(event: ChatSendAfterEvent){
    if (event.message.startsWith("$")){

        const text = event.message.split("$")[1]; 

        const commandsList = commandList();

        if (commandsList[0].alises.includes(text)){
            transLevelCommand(event.sender);
        }
        else if (commandsList[1].alises.includes(text)){
            helpCommand(event.sender);
        }


    };
}