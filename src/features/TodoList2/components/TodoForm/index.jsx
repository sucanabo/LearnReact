import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmitForm: PropTypes.func
};
TodoForm.defaultProps = {
    onSubmitForm: null
}
function TodoForm(props) {
    const { onSubmitForm } = props;
    const [value, setValue] = useState('');
    function inputChange(e) {
        console.log(e.target.value);
        setValue(e.target.value);
    }
    function handldeFormSubmit(e) {
        e.preventDefault();
        if (onSubmitForm) {
            return onSubmitForm(value);
        }
    }
    return (
        <div>
            <form onSubmit={handldeFormSubmit}>
                <input
                    id="new-todo"
                    type="text" value={value}
                    onChange={inputChange}
                    placeholder="Enter new todo." />
                <input type="submit" value="Create new" />
            </form>
        </div>
    );
}

export default TodoForm;