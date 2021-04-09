import queryString from 'query-string';
import React, { useState,useEffect, useMemo } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import ToDoList from '../../components/ToDoList';
function ListPage() {
    const data = [
        {
            id: 1,
            title: 'eat',
            status: 'done'
        },
        {
            id: 2,
            title: 'drink',
            status: 'not'
        },
        {
            id: 3,
            title: 'poop',
            status: 'not'
        },
    ];
    //getURLParams
    const location = useLocation();
    const match = useRouteMatch();
    const history = useHistory();
    //state
    const [todoList, setTodoList] = useState(data);
    const [filter, setFilter] = useState(()=>{
        const params = queryString.parse(location.search);
        return params.status || 'all';
    });
    //funticon
    const handleTodoClick = (todo, index) => {
        console.log(todo);
        //clone data 
        const newTodoList = [...todoList];
        //change data 
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'done' ? 'not' : 'done'
        }
        //update data
        setTodoList(newTodoList);

    }
    const handleAllClick = () => {
        const queryParams = queryString.stringify({status:'all'});
        history.push({
            pathname:match.path,
            search:queryParams
        });
       
    }
    const handleDoneClick = () => {
        const queryParams = queryString.stringify({status:'done'});
        history.push({
            pathname:match.path,
            search:queryParams
        });
    }
    const handleNotClick = () => {
        const queryParams = queryString.stringify({status:'not'});
        history.push({
            pathname:match.path,
            search:queryParams
        });
    }
    useEffect(() => {
        const URLParams = queryString.parse(location.search);
        const status = URLParams.status;
        setFilter(status || 'all');
        return () => {
            
        };
    }, [location.search]);
    const filterItems = useMemo(()=>{
        return todoList.filter(todo =>
            filter === todo.status || filter === 'all'
        );
    },[filter,todoList]);
    console.log(filterItems);
    return (
        <div>
            <h3>To do list:</h3>
            <ToDoList todoList={filterItems} onTodoClick={handleTodoClick} />
            <button onClick={handleAllClick}>All</button>
            <button onClick={handleDoneClick}>Done</button>
            <button onClick={handleNotClick}>Not</button>
        </div>
    );
}

export default ListPage;