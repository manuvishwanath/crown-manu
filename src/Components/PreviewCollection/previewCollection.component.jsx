import React from 'react';
import { Link, withRouter } from 'react-router-dom'

import './previewCollection.styles.scss';
import CollectionItem from '../CollectionItem/Collection-Item.component'


const previewCollection = ({ title, items, match }) => (
    <div className="collection-preview">
        <Link className="title" to={`${match.path}/${title.toLowerCase()}`}>{title.toUpperCase()}</Link>
        <div className="preview">
            {
                items.filter((item, idx) => { return idx < 4; }).map((item) =>
                    (<CollectionItem key={item.id} item={item}></CollectionItem>)
                )
            }
        </div>
    </div>
);

export default withRouter(previewCollection);