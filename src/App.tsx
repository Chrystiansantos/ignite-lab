import { gql, useQuery } from '@apollo/client';

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
  console.log(data);
  return (
    <ul>
      {data?.lessons.map(lesson => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  );
}

export default App;
