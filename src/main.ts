import {world, ChatSendAfterEvent} from "@minecraft/server";
// import * as ui from "@minecraft/server-ui";
import {transLevelUiSend} from './commands/transfer-level.js'

var commandList: Array<string> = ["tlevel"];


world.afterEvents.chatSend.subscribe( (arg: ChatSendAfterEvent) => {
    if (arg.message.startsWith("$")){
        const text = arg.message.slice(1, 15); 

        if (text === commandList[0]){
            transLevelUiSend(arg.sender)
        }

    };
});