import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.component.scss'


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => {
        console.log(`${match.url}${linkUrl}`);
        history.push(`${match.url}${linkUrl}`)
    }}>
        <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
        <div className='content'>
            <div className='title'>{title.toUpperCase()}</div>
            <div className='subtitle'>Shop Now</div>
        </div>
    </div>
);

export default withRouter(MenuItem);