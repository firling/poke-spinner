import { FC } from "react"
import { useDrag } from "react-dnd";
import { IUserPoke } from "../../../@types/poke";

interface ItemProps {
    userPoke: IUserPoke,
    inventoryId: number
}

export const Item: FC<ItemProps> = ({userPoke, inventoryId}) => {

    const [, drag] = useDrag({
        type: "poke",
        item: () => ({...userPoke, inventoryId}),
        canDrag: true,
    })

    return (
        <div 
            ref={drag}
            style={{
                height: '100%',
                transform: 'translate(0, 0)',
                cursor: 'grab',
            }} 
        >
            <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${userPoke.poke.pokedexId}.svg`} 
                style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                }}
            /> 
        </div>
    )
}