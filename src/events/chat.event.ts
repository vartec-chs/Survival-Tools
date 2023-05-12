import { ChatSendAfterEvent } from "@minecraft/server";
import { transLevelUiSend } from "../commands/transfer-level.js";
import commandList from "../command.list.js";

export default function chatEventSubscribe(event: ChatSendAfterEvent){
    if (event.message.startsWith("$")){
        const text = event.message.split("$"); 


        commandList().forEach( (value) =>{
            if (text[1] in value.alises){
                transLevelUiSend(event.sender)
            }
        } )


    };
}