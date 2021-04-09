import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import Pagination from './components/Pagination';
import SearchForm from './components/SearchForm';
PostList.propTypes = {

};

function PostList(props) {
    //state
    const [posts, setPosts] = useState([]);
    const [pagination, setPagination] = useState({
        '_limit': 10,
        '_page': 1,
        'totalRows': 1,
    });
    const [filters, setFilters] = useState({
        '_limit': 10,
        '_page': 1,
    });
    useEffect(() => {
        async function fetchData() {
            try {
                const string = queryString.stringify(filters);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${string}`;
                const respone = await fetch(requestUrl);
                const responeJSON = await respone.json();
                const { data, pagination } = responeJSON;
                console.log('json: ',responeJSON);
                setPosts(data);
                setPagination(pagination);
            } catch (error) {
                console.log(error);
            }

        }
        fetchData();
    }, [filters]);

    //handle event
    const handlePageChange = (page) => {
        setFilters({
            ...filters,
            '_page': page
        });
    }
    const handleFilterChange = (searchTerm)=>{
        console.log(searchTerm);
        setFilters({
            ...filters,
            _page:1,
            title_like: searchTerm,
        });
    }
    return (
        <div className="container">
            <h1>List Post:</h1>
            <SearchForm onSubmitForm = {handleFilterChange}/>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
            <Pagination paginationObj={pagination} onPageChange={handlePageChange} />
        </div>
    );
}
export default PostList;