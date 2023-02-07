import { Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { SpacerVertical } from "../../components";
import './home.css'

const linksStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  fontSize: 30,
}

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Container>
      <SpacerVertical height={40} />

      <Typography variant="h2" component="h2" style={{ textAlign: 'center' }}>
        SpaceX Data Explorer
      </Typography>

      <SpacerVertical height={30} />

      <Typography variant="h6" component="h6" style={{ textAlign: 'center' }}>
        What would you like to see?
      </Typography>

      <SpacerVertical height={120} />

      <div style={linksStyle}>
        <Link onClick={() => navigate('rockets')} underline="none" className='navigation-link' data-testid='rockets-link'>
          Rockets 🚀
        </Link>
        <Link onClick={() => navigate('launches')} underline="none" className='navigation-link' data-testid='launches-link'>
          Launches 🌎
        </Link>
      </div>
    </Container>
  )
}