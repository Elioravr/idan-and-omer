import { useState, useCallback, useEffect } from 'react';

const defaultTodos = [
  { title: 'דרכון', isDone: false },
  { title: 'בגדים לחתונה', isDone: false },
  { title: 'נעליים לחתונה', isDone: false },
  { title: 'בגד ים', isDone: false },
  { title: 'כפכפים', isDone: false },
  { title: 'קרם הגנה', isDone: false },
];

function WhatToBring() {
  const [addTodoInputValue, setAddTodoInputValue] = useState('');
  const [todoList, setTodoList] = useState(defaultTodos);

  useEffect(() => {
    const listInJson = localStorage.getItem('idanAndOmerList');
    if (listInJson != null) {
      setTodoList(JSON.parse(listInJson));
    }
  }, []);

  const addTodo = useCallback(() => {
    if (addTodoInputValue === '') {
      return;
    }

    const newList = [...todoList, { title: addTodoInputValue, isDone: false }];

    setTodoList((currentList) => {
      return newList;
    });
    setAddTodoInputValue('');

    localStorage.setItem('idanAndOmerList', JSON.stringify(newList));
  }, [addTodoInputValue, todoList]);

  const handleInputKeyUp = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        addTodo();
      }
    },
    [addTodo]
  );

  const createHandleToggleDoneCallback = useCallback(
    (index) => {
      return () => {
        const newList = [...todoList];
        newList[index] = {
          title: newList[index].title,
          isDone: !newList[index].isDone,
        };
        setTodoList(newList);
        localStorage.setItem('idanAndOmerList', JSON.stringify(newList));
      };
    },
    [todoList]
  );

  const createHandleDeleteTodoCallback = useCallback(
    (index) => {
      return () => {
        const newList = [...todoList];
        newList.splice(index, 1);
        setTodoList(newList);
        localStorage.setItem('idanAndOmerList', JSON.stringify(newList));
      };
    },
    [todoList]
  );

  return (
    <div className='what-to-bring-container'>
      <div className='add-todo-container'>
        <input
          className='add-todo-input'
          type='text'
          placeholder='עוד משהו?'
          onChange={(e) => setAddTodoInputValue(e.target.value)}
          onKeyUp={handleInputKeyUp}
          value={addTodoInputValue}
        />
        <div className='add-todo-button' onClick={addTodo}>
          הוסף
        </div>
      </div>
      <div className='todo-node'>
        תרגישו חופשי להוסיף משימות, הרשימה היא אישית למכשיר שלכם, נשמרת בשבילכם
        ולא עוברת למשתמשים האחרים 🤩
      </div>
      {todoList.map((todo, index) => {
        const id = `todo-${index}`;
        const handleToggleDone = createHandleToggleDoneCallback(index);
        return (
          <div className='todo-container' key={id}>
            <input
              className='todo-checkbox'
              type='checkbox'
              checked={todo.isDone}
              onChange={handleToggleDone}
              id={id}
            />
            <label
              className={`todo-title ${todo.isDone ? 'done' : ''}`}
              htmlFor={id}
            >
              {todo.title}
            </label>
            <div
              className='delete-button'
              onClick={createHandleDeleteTodoCallback(index)}
            >
              X
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WhatToBring;
