import { FC, ReactNode } from "react"
import { Paper } from "@mantine/core"
import { useDrop } from "react-dnd";
import { IUserPoke } from "../../../@types/poke";

interface InventorySlotProps {
    inventoryId: number
    handleDrop: (inventoryId: number, item: IUserPoke, isDestStuff?: boolean) => void
    isStuff?: boolean
    children?: ReactNode
}

export const InventorySlot: FC<InventorySlotProps> = ({inventoryId, handleDrop, isStuff, children}) => {

    const [{ isOver, canDrop }, drop] = useDrop({
      accept: "poke",
      drop(item: IUserPoke) {
        if (item.position === inventoryId && item.isEquipped === !!isStuff) return;
        handleDrop(inventoryId, item, isStuff)
      },
      collect: monitor => {
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
          type: monitor.getItemType()
        };
      }
    });

    return (
        <Paper
            ref={drop}
            p="lg"
            sx={{
                background: (isStuff && !children) ? 'center / contain no-repeat url("/pokeball.png") #fee8b7' : '#fee8b7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: canDrop
                    ? `1px solid ${isOver ? "green" : "gold"}`
                    : "1px solid #0c1e20",
            }}
            style={isStuff ? {
                height: '30%'
            } : {
                height: '130px',
                width: '130px',
            }}
        >
            {children}
        </Paper>
    )
}