import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../AlbumItem';
import './style.scss';
AlbumList.propTypes = {
    albums: PropTypes.array.isRequired
};

function AlbumList({ albums }) {
    return (
        <ul className="album__list">
            {
                albums.map(album => (
                    <li key={album.id}>
                        <AlbumItem album={album} />
                    </li>
                ))
            }
        </ul>
    );
}

export default AlbumList;