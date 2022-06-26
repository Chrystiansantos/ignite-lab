import { gql, useQuery } from '@apollo/client';

import { Event } from './pages/Event';

const GET_LESSON_QUERY = gql`
  query lessons {
    lessons {
      id
      title
    }
  }
`;

interface ILesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: ILesson[] }>(GET_LESSON_QUERY);
  return <Event />;
}

export default App;
