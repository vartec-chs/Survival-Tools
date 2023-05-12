import { Player, world } from "@minecraft/server"
import commandList from "../command.list.js"




export default function helpCommand(player: Player){
    const overworld = world.getDimension("overworld")
    
    commandList().forEach(value => {
        overworld.runCommandAsync(
            `tellraw ${player.name} {"rawtext": [{"text": "§l${value.id}) §9${value.name} §f- §2${value.description}.§f\nЧтобы вызвать команду напиши:\n§g${value.alises}"}]}`
        )
    })
}