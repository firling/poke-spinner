import { Button, Grid, Paper, Title, rem } from "@mantine/core";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();

    const route = [
        {
            path: "/",
            text: "Maison"
        },
        {
            path: "/profil",
            text: "Dresseur"
        },
        {
            path: "/center",
            text: "Centre pokemon"
        },
    ]
    
  return (
    <Grid gutter={20} sx={{ margin: 0, height: "100%" }}>
      <Grid.Col lg={3} md={4}>
        <Paper
          radius="md"
          p="sm"
          shadow="xl"
          sx={{
            height: "100%",
            backgroundColor: "#0d7319",
            color: "#fff",
          }}
        >
          <Title align="center">PokeSpinner</Title>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: rem(50),
            }}
          >
            {route.map((item) => (
                <Button
                    key={item.path}
                    variant="light"
                    color={item.path === window.location.pathname ? 'green' : 'gray'}
                    fullWidth
                    style={{marginBottom: rem(10)}}
                    onClick={() => navigate(item.path)}
                >{item.text}</Button>
            ))}
          </div>
        </Paper>
      </Grid.Col>
      <Grid.Col lg={9} md={8}>
        <Outlet />
      </Grid.Col>
    </Grid>
  );
};

export { Layout };
