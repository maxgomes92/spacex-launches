import { useState } from "react";
import { Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { CardList, SpacerVertical } from '../../components'
import useRockets from "../../hooks/useRockets";

const limit = 100, step = 10;

export default function RocketsPage() {
  const [listPointer, setOffset] = useState(step)
  const { data, loading, error } = useRockets(limit)
  
  const loadMoreOnClick = () => {
    setOffset(listPointer + step)
  }

  // if (error) return <pre>{JSON.stringify(error.message, null, 4)}</pre>

  return (
    <Container>
      <SpacerVertical height={40} />

      <Typography variant="h2" component="h2" style={{ textAlign: 'center' }}>
        SpaceX Rockets
      </Typography>

      <SpacerVertical height={100} />

      {/* <CardList items={data?.launches.slice(0, listPointer)} isLoading={loading} /> */}

      <SpacerVertical height={20} />

      <div style={{ textAlign: 'center' }}>
        <Button variant='outlined' onClick={loadMoreOnClick}>Load more launches</Button>
      </div>

      <SpacerVertical height={20} />
    </Container>
  );
}
