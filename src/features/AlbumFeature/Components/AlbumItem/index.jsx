import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
AlbumItem.propTypes = {

};

function AlbumItem({ album }) {
    return (
        <div className="album__item">
            <div className="album__img">
                <img src={album.url} alt={album.name} />
            </div>
            <p>{album.name}</p>
        </div>
    );
}

export default AlbumItem;