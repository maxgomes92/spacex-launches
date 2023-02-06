import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Grid, Skeleton } from "@mui/material";

type Props = { items?: any[], isLoading: boolean, children: (item: any) => ReactJSXElement }

const gridStyle = {
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: 25,
}

const loadingList = Array(6).fill(0)

export default function CardList({ items, isLoading, children }: Props) {
  return (
    <Grid container spacing={2}>
      {(items || loadingList).map((item) => (
        <Grid md={6} lg={4} style={gridStyle} key={item.id} item>
          <div>
            {isLoading && <Skeleton variant="rectangular" width={345} height={320} />}            
            {!isLoading && children(item)}
          </div>
        </Grid>
      ))}
    </Grid>
  )
}