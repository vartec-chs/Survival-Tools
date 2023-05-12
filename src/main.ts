import {world, ChatSendAfterEvent, PlayerJoinAfterEvent} from "@minecraft/server";
import chatEventSubscribe from "./events/chat.event.js";


world.afterEvents.chatSend.subscribe( (event: ChatSendAfterEvent) => {
    chatEventSubscribe(event);
});

world.afterEvents.playerJoin.subscribe( (event: PlayerJoinAfterEvent) => {
    const playerName = event.playerName;
    
} )