# Graphql

Fazendo requisicões utilizando graphql.

Primeiro passo irei instalar a seguinte lib:

```bash
❯ yarn add @apollo/client graphql
```

Em seguida irei criar um arquivo chamado apollo dentro do seguinte diretorio. "src/lib/apollo.ts"

```ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'endereco do server graphql',
  // funcao pra estrateja de cache
  cache: new InMemoryCache(),
});
```

Logo a seguir precisarei ir na raiz do meu projeto no componente "main.tsx" e englobar todos meu componentes com o seguite componente importado do apollo. E como props irei passar o client que acabei de criar logo acima.

```tsx
import { ApolloProvider } from '@apollo/client';
import App from './App';
import { client } from './lib/apollo';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
```

Irei realizar a requisicao da seguinte maneira:

```tsx
import { gql, useQuery } from '@apollo/client';
const GET_LESSON_QUERY = gql`
  query lessons {
    lessons {
      id
      title
    }
  }
`;

export function App() {
  const { data } = useQuery(GET_LESSON_QUERY);

  return (
    <ul>
      {data.lessons.map(lesson => (
        <li>{lesson.title}</li>
      ))}
    </ul>
  );
}
```