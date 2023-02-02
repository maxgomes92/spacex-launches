import './App.css';
import { gql, useQuery } from '@apollo/client';

const FILMS_QUERY = gql`
  query LaunchesQuery($limit: Int, $sort: String) {
    launches(limit: $limit, sort: $sort) {
      upcoming
      launch_date_utc
      id
      mission_name
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(FILMS_QUERY, { variables: { limit: 10 } }) as any

  if (loading) return <>Loading...</>;
  if (error) return <pre>{JSON.stringify(error.networkError.result.errors, null, 4)}</pre>

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>SpaceX Launches</h1>
          <ul>
            {data.launches.map((launch: any) => (
              <li key={launch.id}>{launch.launch_date_utc} {launch.mission_name}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
