import { useState } from "react";
import { Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { LaunchItem, CardList, SpacerVertical } from '../../components'
import { useLaunches } from '../../hooks';

const limit = 100, step = 10;

export default function LaunchesPage() {
  const [listPointer, setOffset] = useState(step)
  const { data, loading, error } = useLaunches(limit)

  const loadMoreOnClick = () => {
    setOffset(listPointer + step)
  }

  if (error) {
    return (
      <div data-testid='launches-error-message'>
        {error.message}
      </div>
    )
  }

  return (
    <Container>
      <SpacerVertical height={40} />

      <Typography variant="h2" component="h2" style={{ textAlign: 'center' }}>
        SpaceX Launches
      </Typography>

      <SpacerVertical height={100} />

      <CardList items={data?.launches.slice(0, listPointer)} isLoading={loading}>
        {(item) => (
          <LaunchItem item={item} />
        )}
      </CardList>

      <SpacerVertical height={20} />

      <div style={{ textAlign: 'center' }}>
        <Button variant='outlined' onClick={loadMoreOnClick} data-testid='load-more-button'>
          Load more launches
        </Button>
      </div>

      <SpacerVertical height={20} />
    </Container>
  );
}
