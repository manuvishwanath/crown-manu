import React from 'react';

import './previewCollection.styles.scss';
import CollectionItem from '../CollectionItem/Collection-Item.component'


const previewCollection = ({ title, items }) => (
    <div className="collection-preview">
        <div className="title">{title.toUpperCase()}</div>
        <div className="preview">
            {
                items.filter((item, idx) => { return idx < 4; }).map((item) =>
                    (<CollectionItem key={item.id} item={item}></CollectionItem>)
                )
            }
        </div>
    </div>
);

export default previewCollection;