import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './Components/AlbumList';

ALbumFeature.propTypes = {

};

function ALbumFeature(props) {
    const data = [
        {
            id: 1,
            name: 'V-Pop Tháng 1/2021 Có Gì Hot?',
            url: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/9/e/c/c9ec8e136ffde4db3748ee369d675a7f.jpg'
        },
        {
            id: 2,
            name: 'K-Pop Tháng 1/2021 Có Gì Hot?',
            url: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/0/2/0/c0208e56308c477e425dc067e3577d1b.jpg'
        },
        {
            id: 3,
            name: 'US-UK Tháng 1/2021 Có Gì Hot?',
            url: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/d/9/0/8/d90841effce199476409a704b96e9368.jpg'
        },
        {
            id: 4,
            name: 'C-Pop Tháng 1/2021 Có Gì Hot?',
            url: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/2/4/9/a/249a007b25bbd088ba78f806c8f37eb8.jpg'
        },
    ];
    return (
        <AlbumList albums={data} />
    );
}

export default ALbumFeature;