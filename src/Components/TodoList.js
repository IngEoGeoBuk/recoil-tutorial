import React from 'react'
import {useRecoilValue} from 'recoil';
import {todoListState} from '../recoil/atoms/TodoListAtom'
import {filteredTodoListState} from '../recoil/selectors/TodoListSelector'
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem'
import TodoListStats from './TodoListStats'
import TodoListFilters from './TodoListFilters'

const TodoList = () => {
    // const todoList = useRecoilValue(todoListState);
    const todoList = useRecoilValue(filteredTodoListState);

    return (
      <>
        <TodoListStats />
        <TodoListFilters />
        <TodoItemCreator />
  
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}

      </>
    );
}

export default TodoList