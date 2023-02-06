import { useQuery, QueryResult } from '@apollo/client';
import { GetLaunchesDocument, Launch } from '../generated/graphql';

type LaunchesQuery = { launches: Launch[] }

export default function useLaunches(limit: number): QueryResult<LaunchesQuery> {
  return useQuery<LaunchesQuery>(GetLaunchesDocument, { variables: { limit } });
}
