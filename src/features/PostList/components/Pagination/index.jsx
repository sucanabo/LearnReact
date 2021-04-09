import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    paginationObj: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,

};
Pagination.defaultProps = {
    onPageChange: null,

};
function Pagination(props) {
    const { paginationObj, onPageChange } = props;
    const { _limit, _page, _totalRows } = paginationObj;
    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage);
        }
    }
    const totalPage = Math.ceil(_totalRows / _limit);

    return (
        <div>
            <button
                disabled={_page === 1}
                onClick={() => handlePageChange(_page - 1)}
            >Pre</button>
            <button
                disabled={_page === totalPage}
                onClick={() => handlePageChange(_page + 1)}
            >Next</button>
        </div>
    );
}

export default Pagination;