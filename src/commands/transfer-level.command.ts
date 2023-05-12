import {world, Player, system} from "@minecraft/server";
import * as ui from "@minecraft/server-ui";


export default function transLevelCommand(player: Player): void {

    player.runCommandAsync(`tellraw @s {"rawtext": [{"text": "§l§9Закройте чат и подождите появления окна ввода!"}]}`)
    let players: Array<Player> = world.getAllPlayers()

    const playersNames: Array<string> = []

    players.forEach((value: Player) => (playersNames.push(value.nameTag)))

    let modal = new ui.ModalFormData()
    .title("§l§gПеревод уровня")
    .dropdown("Выберите игрока для перевода:", playersNames, 0)
    .slider("Кол-во уровней", 0, player.level, 1)
    system.runTimeout( ()=>{
        modal.show(player as any).then( (value) => {

            let v = value.formValues as Array<number>
            const valueName = v[0]
            const countLevel = v[1] 

            let selectedPlayer = playersNames[valueName]

            transferLevel(player, selectedPlayer, countLevel)
            
            })
    }, 
    50
    )
}

function transferLevel(fromPlayer: Player, whomPlayer: string, count: number): void{
    let overworld = world.getDimension("overworld")
    overworld.runCommandAsync(`tellraw ${whomPlayer} {"rawtext": [{"text": "§l§a${fromPlayer.name} перевёл вам ${count} уровней!"}]}`)
    overworld.runCommandAsync(`xp ${count}L ${whomPlayer}`)
    overworld.runCommandAsync(`tellraw ${fromPlayer.name} {"rawtext": [{"text": "§l§aВы успешно перевели ${count} уровней ${whomPlayer}!"}]}`)
    overworld.runCommandAsync(`xp -${count}L ${fromPlayer.name}`)
    
}