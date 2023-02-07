import { Container } from "@mui/system";
import { Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { CardList, SpacerVertical } from '../../components'
import { useRockets } from "../../hooks";
import RocketItem from "../../components/RocketItem";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { Rocket } from "../../generated/graphql";

export default function RocketsPage() {
  const [sorted, setSorted] = useState<Rocket[]>()
  const [countries, setCountries] = useState<string[]>([])
  const { data, loading, error } = useRockets()

  useEffect(() => {
    if (!data?.rockets) {
      return;
    }

    setCountries(Array.from(new Set(data.rockets.map(rocket => rocket.country || ''))))
  }, [data])

  if (error) {
    return (
      <div data-testid='rockets-error-message'>
        {error.message}
      </div>
    )
  }

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

  const onCountryFilterChange = ({ target: { value }}: BaseSyntheticEvent) => {
    if (!data?.rockets) return;

    const filtered = data?.rockets.filter((rocket) => rocket.country === value)

    setSorted(filtered)
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

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6" component="h6">
          Filter by country:
        </Typography>

        <FormControl style={{ paddingLeft: 10 }}>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={onCountryFilterChange}
          >
            {countries.map((country) => (
              <FormControlLabel value={country} control={<Radio />} label={country} key={'country-radio_' + country} />
            ))}
          </RadioGroup>
        </FormControl>
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
