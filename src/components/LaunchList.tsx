import { Grid, Skeleton } from "@mui/material";
import { Launch } from "../generated/graphql";
import LaunchItem from "./LaunchItem";

type Props = { items?: Launch[], isLoading: boolean }

const gridStyle = {
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: 25,
}

const loadingList = Array(6).fill(0)

export default function LaunchList({ items, isLoading }: Props) {
  return (
    <Grid container spacing={2}>
      {(items || loadingList).map((item) => (
        <Grid md={6} lg={4} style={gridStyle}>
          <div>
            {isLoading && <Skeleton variant="rectangular" width={345} height={320} />}            
            {!isLoading && <LaunchItem item={item} />}
          </div>
        </Grid>
      ))}
    </Grid>
  )
}