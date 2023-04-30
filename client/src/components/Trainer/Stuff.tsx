import { FC, useEffect } from 'react';
import { Grid, Paper, SimpleGrid } from "@mantine/core";
import { getInventory } from '../../api/users';
import { useQuery } from 'react-query';
import { useListState } from '@mantine/hooks';

interface PokeSlotProps {
    pokeId: number
}

const PokeSlot: FC<PokeSlotProps> = ({pokeId}) => {
    return (
        <Paper
            p="lg"
            sx={{
                background: !pokeId ? 'center / contain no-repeat url("/pokeball.png") #fee8b7' : '#fee8b7',
                height: '30%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {pokeId !== null && (
                <img 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`} 
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                    }}
                /> 
            )}
        </Paper>
    )
}

export function Stuff() {
    const { data } = useQuery('inventory', getInventory)

    const [pokeFions, handlers] = useListState([1, 4, 86, 35, 45, 74]);

    useEffect(() => {
        if (!data) return;
        const ids = data.data.userPokes.map((userPoke) => userPoke.poke.pokedexId)
        handlers.setState([...ids, ...Array.from({length: 6 - ids.length}, () => null)])
    }, [data]);

    return (
        <Grid gutter={15} sx={{maxHeight: '100%'}}>
            <Grid.Col span={4}>
                <div style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    {pokeFions.slice(0, 3).map((pokeId, i) => (
                        <PokeSlot key={i} pokeId={pokeId} />
                    ))}
                </div>
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
                <div style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    {pokeFions.slice(3).map((pokeId, i) => (
                        <PokeSlot key={i} pokeId={pokeId} />
                    ))}
                </div>
            </Grid.Col>
        </Grid>
    )
}