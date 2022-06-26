import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: import.meta.env.VITE_URL_GRAPHQL,
  cache: new InMemoryCache(),
});