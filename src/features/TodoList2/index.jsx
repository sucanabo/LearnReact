import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListTodo from './components/ListTodo';
import TodoForm from './components/TodoForm';

TodoList.propTypes = {

};

function TodoList(props) {
    const data = [
        {
            'id': 0,
            'content': 'eat',
            'status': 'doing'
        },
        {
            'id': 1,
            'content': 'spleep',
            'status': 'done'
        },
        {
            'id': 2,
            'content': 'code',
            'status': 'doing'
        },

    ];
    const handleTodoClick = (todo) => {
        const newList = [...todos];
        let todoIndex = newList.findIndex(item => item.id === todo.id);
        if (todoIndex < 0) return;
        newList.splice(todoIndex, 1);
        setTodos(newList);

    };
    const handleSubmitForm = (newTodo) => {
        const newList = [...todos];
        let newItem = {
            'id': newList.length,
            'content': newTodo.toString(),
            'status': 'doing'
        }
        newList.push(newItem);
        setTodos(newList);
    };

    const [todos, setTodos] = useState(data);
    return (
        <div>
            <h3>Todo List</h3>
            <TodoForm onSubmitForm={handleSubmitForm} />
            <ListTodo todoList={todos} onTodoClick={handleTodoClick} />
        </div>
    );
}

export default TodoList;