import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import {useState, useRef} from 'react';

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createDate: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createDate: new Date().getTime()
  }
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newItem = {
    id: idRef.current,
    content: content,
    isDone: false,
    createDate: new Date().getTime()
  };
  setTodo([newItem, ...todo]);
  idRef.current += 1;
};
const onUpdate = (targetId) => {
  setTodo(
    todo.map((item) => {
      if (item.id === targetId) {
        return {...item, isDone: !item.isDone};
      }
      else {
        return item;
      }
    })
  );
};

const onDelete = (targetId) => {
  setTodo(todo.filter((item) => item.id !== targetId));
};

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
