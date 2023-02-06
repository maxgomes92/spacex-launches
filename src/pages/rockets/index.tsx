import { Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { CardList, SpacerVertical } from '../../components'
import useRockets from "../../hooks/useRockets";
import RocketItem from "../../components/RocketItem";

export default function RocketsPage() {
  const { data, loading, error } = useRockets()

  if (error) return <pre>{JSON.stringify(error.message, null, 4)}</pre>

  return (
    <Container>
      <SpacerVertical height={40} />

      <Typography variant="h2" component="h2" style={{ textAlign: 'center' }}>
        SpaceX Rockets
      </Typography>

      <SpacerVertical height={100} />

      <CardList items={data?.rockets} isLoading={loading}>
        {(item) => (
          <RocketItem item={item} />
        )}  
      </CardList>
    </Container>
  );
}
