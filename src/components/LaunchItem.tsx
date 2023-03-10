import { CSSProperties, PropsWithChildren } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Launch } from "../generated/graphql";
import { rocketImgUrl } from '../utils/constants';

const cardStyle: CSSProperties = { 
  display: 'flex',
  flexDirection: 'column',
}

export type Props = PropsWithChildren<{ item: Launch }>

export default function LaunchItem({ item }: Props) {
  const learnMoreOnClick = () => {
    if (!item.links?.article_link) return

    window.open(item.links.article_link)
  }

  return (
    <Card sx={{ width: 345, height: '100%' }} style={cardStyle} data-testid='launch-item'>
      <CardMedia
        component="img"
        alt="Rocket image"
        height="180"
        image={item.links?.flickr_images?.[0] || rocketImgUrl}
      />
      <CardContent style={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {item.mission_name}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          {new Date(item.launch_date_utc).toDateString()}
        </Typography>        
        <Typography variant="body2" color="text.secondary">
          {item.details}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={learnMoreOnClick} disabled={!!!item.links?.article_link} data-testid='learn-more-button'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}