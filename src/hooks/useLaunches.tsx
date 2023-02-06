import { useQuery, QueryResult } from '@apollo/client';
import { GetLaunchesDocument, Launch } from '../generated/graphql';

type LaunchesQuery = { launches: Launch[] }

export default function useLaunches(): QueryResult<LaunchesQuery> {
  return useQuery<LaunchesQuery>(GetLaunchesDocument, { variables: { limit: 10, sort: 'launch_date_utc:desc' } });
}
