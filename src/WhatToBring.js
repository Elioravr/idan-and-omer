import { useState, useCallback, useEffect } from 'react';

const defaultTodos = [
  {
    title: 'מלון, בריכה פרטית וחוף צמוד(!!) - ',
    subTitle: 'עלינו כפרות',
    isDone: true,
    isDisabled: true,
  },
  { 
    title: 'ארוחות ושתייה - ', 
    subTitle: 'כלוללללללל',
    isDone: true, 
    isDisabled: true 
  },
  {
    title: 'מסיבות ואווירה יוונית - ',
    subTitle: 'כלוללללללל',
    isDone: true,
    isDisabled: true,
  },
  { 
    title: 'תזמינו כרטיסי טיסה לאתונה - ', 
    subTitle: 'לפי ההסעות',
    isDone: false },
  {
    title: 'תעדכנו אותנו שאתם מגיעים - ',
    subTitle: 'באיזה טיסה ושאטל שאתם רוצים',
    isDone: false,
  },
  {
    title: 'תבדקו שנייה את הפספורט - ',
    subTitle: 'יש תוקף לחצי שנה מיוני 2024?',
    isDone: false,
  },
  { 
    title: 'תסגרו ביטוח נסיעות אישי - ',
    subTitle: 'למה הולך להיות טירוף',
    isDone: false 
  },
  { 
    title: 'תעדכנו את הבוס.ית - ', 
    subTitle: 'בחמישי ושישי אתם לא מגיעים!!',
    isDone: false },
  { title: 'טוטאל לוק חגיגי לחתונה', isDone: false },
  { title: 'לוק ערב לטברנה - ', 
  subTitle: 'ערב בלבן (גם בהיר הולך!)',
  isDone: false },
  { title: 'בגדי חופשה', isDone: false },
  { title: 'בגדי ים', isDone: false },
  { title: 'כפכפים', isDone: false },
  { title: 'קרם הגנה', isDone: false },
];

function WhatToBring() {
  const [addTodoInputValue, setAddTodoInputValue] = useState('');
  const [todoList, setTodoList] = useState(defaultTodos);

  useEffect(() => {
    const listInJson = localStorage.getItem('idanAndOmerList');
    if (listInJson != null) {
      const parsed = JSON.parse(listInJson);
      for (let index = 0; index < defaultTodos.length; index++) {
        const todo = defaultTodos[index];
        parsed[index].title = todo.title;
        if(todo.subTitle){
          parsed[index].subTitle = todo.subTitle;
        } else {
          parsed[index].subTitle = undefined;
        }
      }
      setTodoList(parsed);
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
        if (todoList[index].isDisabled) {
          return;
        }

        const newList = [...todoList];
        newList[index] = {
          title: newList[index].title,
          subTitle: newList[index].subTitle,
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

  const createLabel = (index) => {
        const todo = todoList[index];
        if(!todo.subTitle){
          return (todo.title);
        } else {
          return (<span><span className='todoTitleSpecial'>{todo.title}</span>
          <span className='todoSubTitleSpecial'>{todo.subTitle}</span>
          </span>)
        }
      };

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
              disabled={todo.isDisabled}
              id={id}
            />
            <label
              className={`todo-title ${todo.isDone ? 'done' : ''}`}
              htmlFor={id}
            >
              {createLabel(index)}
            </label>
            {!todo.isDisabled && (
              <div
                className='delete-button'
                onClick={createHandleDeleteTodoCallback(index)}
              >
                X
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default WhatToBring;
