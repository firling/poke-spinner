import { Grid, Paper } from "@mantine/core";
import { Stuff } from "../components/Trainer/Stuff";

export function Trainer() {
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
                    <Stuff />
                </Grid.Col>
                <Grid.Col span={4}>

                </Grid.Col>
            </Grid>
        </Paper>
    );
  }