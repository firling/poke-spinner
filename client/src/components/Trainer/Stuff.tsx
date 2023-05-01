import { FC } from 'react';
import { Grid } from "@mantine/core";
import { IUserPoke } from '../../@types/poke';
import { InventorySlot } from './components/InventorySlot';
import { Item } from './components/Item';

interface StuffProps {
    pokes: IUserPoke[]
    handleDrop: (inventoryId: number, item: IUserPoke, isDestStuff?: boolean) => void
}

export const Stuff: FC<StuffProps> = ({pokes, handleDrop}) => {

    return (
        <Grid gutter={15} sx={{maxHeight: '100%'}}>
            <Grid.Col span={4}>
                <div style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    {[0, 1, 2].map((x) => {
                        const item = pokes.find(elt => elt.position === x)
                        return (
                            <InventorySlot 
                                key={x} 
                                inventoryId={x}
                                isStuff={true}
                                handleDrop={handleDrop}
                            >
                                {item && (
                                    <Item 
                                        userPoke={item}
                                        inventoryId={x}
                                    />
                                )}
                            </InventorySlot>
                        )
                    })}
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
                    {[3, 4, 5].map((x) => {
                        const item = pokes.find(elt => elt.position === x)
                        return (
                            <InventorySlot 
                                key={x} 
                                inventoryId={x}
                                isStuff={true}
                                handleDrop={handleDrop}
                            >
                                {item && (
                                    <Item 
                                        userPoke={item}
                                        inventoryId={x}
                                    />
                                )}
                            </InventorySlot>
                        )
                    })}
                </div>
            </Grid.Col>
        </Grid>
    )
}