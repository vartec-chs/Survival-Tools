import { ChatSendAfterEvent } from "@minecraft/server";
import { transLevelUiSend } from "../commands/transfer-level.js";
import commandList from "../command.list.js";
import helpCommand from "../commands/help.command.js";

export default function chatEventSubscribe(event: ChatSendAfterEvent){
    if (event.message.startsWith("$")){

        const text = event.message.split("$")[1]; 

        const commandsList = commandList();

        if (commandsList[0].alises.includes(text)){
            transLevelUiSend(event.sender);
        }
        else if (commandsList[1].alises.includes(text)){
            helpCommand(event.sender);
        }


    };
}