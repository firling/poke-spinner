import { Button, Stack, Text } from '@mantine/core';

export function Home() {
  return (
    <Stack align="center" mt={50}>
      <Text size="xl" weight={500}>
        Welcome to PokeSpinner!
      </Text>
      <Button>Click the button</Button>
    </Stack>
  );
}