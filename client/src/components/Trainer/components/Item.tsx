import { FC } from "react"
import { useDrag, DragPreviewImage } from "react-dnd";
import { IUserPoke } from "../../../@types/poke";
import { Tooltip } from 'react-tooltip'
import { Grid, Text, Title } from "@mantine/core";

interface ItemProps {
    userPoke: IUserPoke,
    inventoryId: number
}

export const Item: FC<ItemProps> = ({userPoke, inventoryId}) => {

    const [{ isDragging }, drag, preview] = useDrag({
        type: "poke",
        item: () => ({...userPoke, inventoryId}),
        canDrag: true,
        collect: monitor => ({
          isDragging: monitor.isDragging()
        })
    })

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${userPoke.poke.pokedexId}.svg`

    const calculateStats = (stats: number, level: number) => Math.round(stats * (1 + level/100))

    return (
        <>
            <DragPreviewImage src={imageUrl} connect={preview}/>
            <div 
                ref={drag}
                style={{
                    height: '100%',
                    transform: 'translate(0, 0)',
                    cursor: 'grab',
                    display: 'flex',
                }} 
                data-tooltip-id={`tooltip-${inventoryId}`}
            >
                <img 
                    src={imageUrl} 
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        margin: 'auto',
                    }}
                /> 

                <Tooltip 
                    id={`tooltip-${inventoryId}`}
                    style={{
                        width: '300px',
                        display: isDragging ? 'none' : 'block',
                    }}
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'end',
                    }}>
                        <Title 
                            order={3} 
                            sx={{
                                textShadow: '1px 1px 3px pink',
                            }}
                        >{userPoke.poke.name}</Title>
                        <Text ml="md" color="dimmed">(Niveau: {userPoke.level})</Text>
                    </div>
                    <Grid justify="center" align="center">
                        <Grid.Col span={5}>
                            <Text>HP: {calculateStats(userPoke.poke.baseHp, userPoke.level)}</Text>
                            <Text>Attaque: {calculateStats(userPoke.poke.baseAttack, userPoke.level)}</Text>
                            <Text>Défense: {calculateStats(userPoke.poke.baseDefense, userPoke.level)}</Text>
                        </Grid.Col>
                        <Grid.Col span={7}>
                            <Text>Vitesse: {calculateStats(userPoke.poke.baseSpeed, userPoke.level)}</Text>
                            <Text>Attaque spéciale: {calculateStats(userPoke.poke.baseSpecialAttack, userPoke.level)}</Text>
                            <Text>Défense Spéciale: {calculateStats(userPoke.poke.baseSpecialDefense, userPoke.level)}</Text>
                        </Grid.Col>
                    </Grid>
                </Tooltip>
            </div>
        </>
    )
}