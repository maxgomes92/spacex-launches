import { useState } from "react";
import { Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { LaunchList, SpacerVertical } from '../../components'
import useLaunches from '../../hooks/useLaunches';

const limit = 100, step = 10;

export default function LaunchesPage() {
  const [listPointer, setOffset] = useState(step)
  const { data, loading, error } = useLaunches(limit)
  
  const loadMoreOnClick = () => {
    setOffset(listPointer + step)
  }

  if (error) return <pre>{JSON.stringify(error.message, null, 4)}</pre>

  return (
    <Container>
      <SpacerVertical height={40} />

      <Typography variant="h2" component="h2" style={{ textAlign: 'center' }}>
        SpaceX Launches
      </Typography>

      <SpacerVertical height={100} />

      <LaunchList items={data?.launches.slice(0, listPointer)} isLoading={loading} />

      <SpacerVertical height={20} />

      <div style={{ textAlign: 'center' }}>
        <Button variant='outlined' onClick={loadMoreOnClick}>Load more launches</Button>
      </div>

      <SpacerVertical height={20} />
    </Container>
  );
}
