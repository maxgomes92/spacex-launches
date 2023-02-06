import { useQuery, QueryResult } from '@apollo/client';
import { GetRocketsDocument, Rocket } from '../generated/graphql';

type RocketsQuery = { rockets: Rocket[] }

export default function useRockets(): QueryResult<RocketsQuery> {
  return useQuery<RocketsQuery>(GetRocketsDocument);
}
