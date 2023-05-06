import { Grid, Paper, Progress, Text, Title } from "@mantine/core";
import { Quest } from "../components/Center/Quest";

export function Center() {
    return (
        <Paper
          radius="md"
          p="xl"
          shadow="xl"
          sx={{
            height: "100%",
            backgroundColor: "#00000033",
            color: "#fff",
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
          }}
        >
            <Grid grow sx={{
                flex: '1',
                display: 'flex',
            }}>
                <Grid.Col span={6}>
                    <Title order={2} align="center">Quêtes</Title>
                    <Quest />
                    <Quest />
                    <Quest />
                </Grid.Col>
                <Grid.Col span={6}></Grid.Col>
            </Grid>
            <div style={{flexBasis: '50px'}}>
                <Text c="teal.9" fw={500} fz="lg" align="center">Enegie : 60/100</Text>
                <Progress color="teal" size="xl" value={60} />
            </div>
        </Paper>
    );
  }