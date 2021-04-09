import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../..';

ListTodo.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
};
ListTodo.defaultProps = {
    todoList: [],
    onTodoClick: null
};
function ListTodo(props) {
    const { todoList, onTodoClick } = props;
    function handleTodoClick(todo) {
        if (onTodoClick) {
            return onTodoClick(todo);
        }

    }
    return (
        <div>
            <ul className="todo-list">
                {todoList.map(todo => (
                    <li
                        key={todo.id}
                        onClick={() => handleTodoClick(todo)}
                    >{todo.content}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListTodo;