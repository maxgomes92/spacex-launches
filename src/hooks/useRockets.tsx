import { useQuery, QueryResult } from '@apollo/client';
import { GetRocketsDocument, Launch } from '../generated/graphql';

type LaunchesQuery = { rockets: Launch[] }

export default function useRockets(limit: number): QueryResult<LaunchesQuery> {
  return useQuery<LaunchesQuery>(GetRocketsDocument, { variables: { limit } });
}
