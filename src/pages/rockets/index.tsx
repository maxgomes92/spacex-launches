import { Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { CardList, SpacerVertical } from '../../components'
import useRockets from "../../hooks/useRockets";
import RocketItem from "../../components/RocketItem";
import { useState } from "react";
import { Rocket } from "../../generated/graphql";

export default function RocketsPage() {
  const [sorted, setSorted] = useState<Rocket[]>()
  const { data, loading, error } = useRockets()

  if (error) return <pre>{JSON.stringify(error.message, null, 4)}</pre>

  const sortByWeight = () => {
    if (!data?.rockets) return;

    setSorted(
      [...data.rockets]
        .sort((a, b) => (b.mass?.kg || 0) > (a.mass?.kg || 0) ? -1 : 1)
    )
  }

  const sortByDiameter = () => {
    if (!data?.rockets) return;

    setSorted(
      [...data.rockets]
        .sort((a, b) => (b.diameter?.meters || 0) > (a.diameter?.meters || 0) ? -1 : 1)
    )
  }

  const sortByCostPerLaunch = () => {
    if (!data?.rockets) return;

    setSorted(
      [...data.rockets]
        .sort((a, b) => (b.cost_per_launch || 0) > (a.cost_per_launch || 0) ? -1 : 1)
    )
  }

  return (
    <Container>
      <SpacerVertical height={40} />

      <Typography variant="h2" component="h2" style={{ textAlign: 'center' }}>
        SpaceX Rockets
      </Typography>

      <SpacerVertical height={40} />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h6" component="h6">
          Sort by:
        </Typography>
        <Button onClick={sortByDiameter}>Diameter</Button>
        <Button onClick={sortByWeight}>Weight</Button>
        <Button onClick={sortByCostPerLaunch}>Cost per launch</Button>
      </div>

      <SpacerVertical height={40} />

      <CardList items={sorted || data?.rockets} isLoading={loading}>
        {(item) => (
          <RocketItem item={item} />
        )}
      </CardList>
    </Container>
  );
}
