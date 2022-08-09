import React from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import TrackCard from '../containers/track-card';
import QueryResult from '../components/query-result';

const TRACKS = gql`
    query GetTracks {
      tracksForHome {
        author {
          id
          name
          photo
        }
        id
        length
        modulesCount
        thumbnail
        title
      }
    }
`;
/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  // useQuery: react hook which provides the primary API for executing GraphQL queries in a React application
  const { data, error, loading } = useQuery(TRACKS);

  return(
      <Layout grid>
        <QueryResult error={error} loading={loading} data={data}>
            {data?.tracksForHome?.map(track => (
                <TrackCard key={track.id} track={track} />
            ))}
        </QueryResult>
      </Layout>
  );
};

export default Tracks;
