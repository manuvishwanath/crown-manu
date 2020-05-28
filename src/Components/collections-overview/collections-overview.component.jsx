import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from '../../Redux/shop/shop.selector'
import CollectionsPreview from '../PreviewCollection/previewCollection.component'
import './collections-overview.styles.scss';


const CollectionsOverview = ({ collections }) => {
    return(
    <div className="collections-overview">
        {
            collections.map(({ id, ...otherCollectionsProps }) => (
                <CollectionsPreview key={id} {...otherCollectionsProps} />
            ))
        }
    </div>
)};

const mapStateToProps = () => createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
