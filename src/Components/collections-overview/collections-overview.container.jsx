import React from 'react';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { selectIsCollectionFetching } from '../../Redux/shop/shop.selector';
import withSpinner from '../withSpinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionsOverview);

//= connect(mapStateToProps)(withSpinner(CollectionsOverview)) 
export default CollectionsOverviewContainer;

