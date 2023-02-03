import { gql, useQuery, QueryResult } from '@apollo/client';
import Launch from '../types/Launch'

const launchesQuery = gql`
  query LaunchesQuery($limit: Int, $sort: String) {
    launches(limit: $limit, sort: $sort) {
      upcoming
      launch_date_utc
      id
      mission_name
      links {
        flickr_images
      }
      rocket {
        rocket_name
      }
      details
    }
  }
`;

type LaunchesQuery = { launches: Launch[] }

export default function useLaunches(): QueryResult<LaunchesQuery> {
  return useQuery<LaunchesQuery>(launchesQuery, { variables: { limit: 10, sort: 'launch_date_utc:desc' } });
}