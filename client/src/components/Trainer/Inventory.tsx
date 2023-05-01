import { FC } from "react";
import { Title, rem } from "@mantine/core";
import { IUserPoke } from "../../@types/poke";
import { InventorySlot } from "./components/InventorySlot";
import { Item } from "./components/Item";

interface InventoryProps {
    pokes: IUserPoke[],
    handleDrop: (inventoryId: number, item: IUserPoke) => void
}

export const Inventory: FC<InventoryProps> = ({pokes, handleDrop}) => {

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div>
                <Title order={2} align='center'>Inventaire</Title>
            </div>
            <div style={{
                marginTop: rem(50),
                display: 'grid',
                gridGap: '10px',
                gridTemplateColumns: 'repeat(3, 1fr)',
            }}>
                {[...Array(12).keys()].map((x) => {
                    const item = pokes.find(elt => elt.position === x)
                    return (
                        <InventorySlot 
                            key={x} 
                            inventoryId={x}
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
        </div>
    )
}