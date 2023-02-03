import { Container } from "@mui/system";
import { LaunchList, SpacerVertical } from './components'
import useLaunches from './hooks/useLaunches';
import './App.css';
import { Typography } from "@mui/material";

function App() {
  const { data, loading, error } = useLaunches()

  if (error) return <pre>{JSON.stringify(error.message, null, 4)}</pre>

  return (
    <Container className="App">
      <SpacerVertical height={40} />

      <Typography variant="h2" component="h2" style={{ textAlign: 'center' }}>
        SpaceX Launches
      </Typography>

      <SpacerVertical height={100} />

      <LaunchList items={data?.launches} isLoading={loading} />
    </Container>
  );
}

export default App;
