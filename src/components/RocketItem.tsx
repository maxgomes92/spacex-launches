import { CSSProperties, PropsWithChildren } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Rocket } from "../generated/graphql";
import { imageByRocketName, rocketImgUrl } from '../utils/constants';

const cardStyle: CSSProperties = { 
  display: 'flex',
  flexDirection: 'column',
}

export type Props = PropsWithChildren<{ item: Rocket }>

export default function RocketItem({ item }: Props) {
  const learnMoreOnClick = () => {
    if (!item.wikipedia) return

    window.open(item.wikipedia)
  }

  return (
    <Card sx={{ width: 345, height: '100%' }} style={cardStyle}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={item.name ? imageByRocketName[item.name] : rocketImgUrl}
      />
      <CardContent style={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          Diameter: {item.diameter?.meters}m
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          Weight: {new Intl.NumberFormat().format(item.mass?.kg || 0)} kg
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          Cost per launch: {new Intl.NumberFormat().format(item.cost_per_launch || 0)} USD
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={learnMoreOnClick} disabled={!!!item.wikipedia}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}