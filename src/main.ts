import {world, ChatSendAfterEvent, PlayerJoinAfterEvent} from "@minecraft/server";
import chatEventSubscribe from "./events/chat.event.js";
import playerJoinEventSubscribe from "./events/player-join.event.js";


world.afterEvents.chatSend.subscribe( (event: ChatSendAfterEvent) => {
    
    chatEventSubscribe(event);
});
world.afterEvents.playerJoin.subscribe( (event: PlayerJoinAfterEvent) => {
    playerJoinEventSubscribe(event)
} )