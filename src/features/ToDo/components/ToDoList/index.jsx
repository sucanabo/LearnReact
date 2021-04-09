import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../..';
import classnames from 'classnames';
import './style.scss';
ToDoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
};
ToDoList.defaultProps = {
    todoList: [],
    onTodoClick: null
}
function ToDoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todo, index) => {
        if (!onTodoClick) return;
        onTodoClick(todo, index);
    };
    return (
        <ul>
            {todoList.map((todo, index) => (
                <li
                    key={todo.id}
                    className={classnames({
                        'todo-item': true,
                        done: todo.status === 'done'
                    })}
                    onClick={() => handleTodoClick(todo, index)}
                >
                    {todo.title}</li>
            ))}
        </ul>
    );
}
export default ToDoList;