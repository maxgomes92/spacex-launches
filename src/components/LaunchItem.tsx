import { CSSProperties, PropsWithChildren } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { Launch } from "../generated/graphql";

const rocketImgUrl = "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/TXDGVXPBEVMY5PA2RHRF2EA25Y.jpg"

const cardStyle: CSSProperties = { 
  display: 'flex',
  flexDirection: 'column',
}

export type Props = PropsWithChildren<{ item: Launch }>

export default function LaunchItem({ item }: Props) {
  return (
    <Card sx={{ width: 345, height: '100%' }} style={cardStyle}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}