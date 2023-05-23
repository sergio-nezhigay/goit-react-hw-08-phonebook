import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { selectAllTasks } from 'redux/tasks/selectors';

import { List } from './TaskList.styled';

export const TaskList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <List>
      {tasks.map(({ id, text }) => (
        <li key={id}>
          <Task id={id} text={text} />
        </li>
      ))}
    </List>
  );
};
