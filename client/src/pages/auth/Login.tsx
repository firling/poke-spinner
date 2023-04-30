import { useState } from 'react';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Anchor,
  Stack,
  Container,
} from '@mantine/core';
import { useAuth } from '../../context/auth/AuthProvider';
import { getUserByToken, login } from '../../api/auth';

export interface ILogin {
  username: string,
  password: string,
}

export function Login() {
  const [loading, setLoading] = useState(false)
  
  const {saveAuth, setCurrentUser} = useAuth()

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },

    validate: {
        username: (val) => (val.length <= 3 ? 'Username should include at least 4 characters' : null),
        password: (val) => (val.length <= 3 ? 'Password should include at least 4 characters' : null),
    },
  });

  const submitForm = async (values: ILogin) => {
    setLoading(true)
    try {
      const {data: auth} = await login(values.username, values.password)
      saveAuth(auth.access_token)
      const {data: user} = await getUserByToken()
      setCurrentUser(user)
    } catch (error) {
      console.error(error)
      saveAuth(undefined)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container size="30rem" sx={{paddingTop: '3rem'}}>
      <Paper radius="md" p="xl" withBorder >
        <Text size="lg" weight={500}>
          Welcome to PokeSpinner
        </Text>

        <form onSubmit={form.onSubmit(submitForm)}>
          <Stack>
              <TextInput
                  label="Name"
                  placeholder="Your name"
                  {...form.getInputProps('username')}
                  radius="md"
              />

              <PasswordInput
                  required
                  label="Password"
                  placeholder="Your password"
                  radius="md"
                  {...form.getInputProps('password')}
              />
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              size="xs"
            >
              Don't have an account? Register
            </Anchor>
            <Button type="submit" radius="xl">
              Login
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}