import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../Redux/shop/shop.selector'
import CollectionItem from '../../Components/CollectionItem/Collection-Item.component'
import './collectionPage.styles.scss'


const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <div className="title">
                <div className="items">
                    {items.map(item =>
                        <CollectionItem key={item.id} item={item} />
                    )}
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => (
    {
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
)

export default connect(mapStateToProps)(CollectionPage);