import { FC } from "react"
import { Paper, Text } from "@mantine/core"
import { IconHourglass } from "@tabler/icons-react"

// interface InventorySlotProps {
//     children?: ReactNode
// }

export const Quest: FC = () => {

    return (
        <Paper
            mt="md"
            sx={() => ({
                backgroundColor: "#fee8b7bb",
                cursor: 'pointer',

                '&:hover': {
                    backgroundColor: "#fee8b7ff"
                },
            })}
            p="md"
        >
            <Text fz="lg" fw={500}>Quête</Text>
            <Text fz="md" c="dimmed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vestibulum vel purus vel tortor tincidunt ultricies at sit amet eros. 
                In mattis risus ut auctor venenatis. Pellentesque tincidunt nibh malesuada tempor dapibus. 
                Praesent ipsum turpis, dapibus auctor quam ultrices, efficitur cursus est. Maecenas elit leo, 
                vehicula eu dignissim et, mattis non nisl.
            </Text>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Text fz="md" c="lime.9">102 xp</Text>
                <Text fz="md" c="yellow.9">26 golds</Text>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <IconHourglass color="teal" size="1rem" /> 
                    <Text fz="md" c="teal">10:00</Text>
                </div>
            </div>
        </Paper>
    )
}