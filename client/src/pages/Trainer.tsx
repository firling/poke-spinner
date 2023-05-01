import { Grid, Paper } from "@mantine/core";
import { Stuff } from "../components/Trainer/Stuff";
import { Inventory } from "../components/Trainer/Inventory";
import { useMutation, useQuery } from "react-query";
import { getInventory, updateUserPoke } from "../api/users";
import { useEffect } from "react";
import { useListState } from "@mantine/hooks";
import { IUserPoke } from "../@types/poke";

export function Trainer() {
    const { data } = useQuery('inventory', getInventory)
    const { mutate: syncUserPoke } = useMutation('update-inventory', updateUserPoke)

    const [userPokes, handlers] = useListState<IUserPoke>([])

    useEffect(() => {
        handlers.setState(data ? data.data.userPokes : [])
    }, [data]);
    
    const handleDrop = (destPosition: number, item: IUserPoke, isDestStuff: boolean = false) => {
        const sourcePosition = item.position

        handlers.applyWhere(
            (applyItem) => 
                (applyItem.position === destPosition && applyItem.isEquipped === isDestStuff)
                || (applyItem.position === item.position && applyItem.isEquipped === item.isEquipped),
            (applyItem) => {
                const newItem = { 
                    ...applyItem, 
                    position: applyItem.position === sourcePosition ? destPosition : sourcePosition,
                    isEquipped: 
                        applyItem.position === sourcePosition 
                        && applyItem.isEquipped === item.isEquipped 
                        ? isDestStuff : item.isEquipped,
                }

                syncUserPoke(newItem)

                return newItem
            }
        );
    }

    return (
        <Paper
          radius="md"
          p="sm"
          shadow="xl"
          sx={{
            height: "100%",
            backgroundColor: "#00000033",
            color: "#fff",
          }}
        >
            <Grid gutter={30} sx={{height: '100%'}}>
                <Grid.Col span={8} sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Stuff 
                        pokes={userPokes.filter((userPoke) => userPoke.isEquipped)} 
                        handleDrop={handleDrop}
                    />
                </Grid.Col>
                <Grid.Col span={4}>
                    <Inventory 
                        pokes={userPokes.filter((userPoke) => !userPoke.isEquipped)} 
                        handleDrop={handleDrop}
                    />
                </Grid.Col>
            </Grid>
        </Paper>
    );
  }