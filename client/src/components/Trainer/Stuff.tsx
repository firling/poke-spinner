import { FC } from 'react';
import { Grid, Paper, SimpleGrid } from "@mantine/core";

interface PokeSlotProps {
    pokeId: number
}

const PokeSlot: FC<PokeSlotProps> = ({pokeId}) => {
    return (
        <Paper
            sx={{
                height: '100%',
                backgroundColor: "#fee8b7",
            }}
        >
            <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`} 
                style={{
                    width: '100%',
                }}
            />
        </Paper>
    )
}

export function Stuff() {


    const pokeFions = [
        1, 4, 86, 35, 45, 74
    ]

    console.log(pokeFions.slice(3))

    return (
        <Grid gutter={15} sx={{maxHeight: '100%'}}>
            <Grid.Col span={4}>
                <SimpleGrid cols={1}>
                    {pokeFions.slice(0,3).map((pokeId) => (
                        <PokeSlot key={pokeId} pokeId={pokeId} />
                    ))}
                </SimpleGrid>
            </Grid.Col>
            <Grid.Col 
                span={4}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <img 
                    src="/trainer.webp" 
                    style={{
                        width: '100%',
                    }}
                />
            </Grid.Col>
            <Grid.Col span={4}>
                <SimpleGrid cols={1}>
                    {pokeFions.slice(3).map((pokeId) => (
                        <PokeSlot key={pokeId} pokeId={pokeId} />
                    ))}
                </SimpleGrid>

            </Grid.Col>
        </Grid>
    )
}