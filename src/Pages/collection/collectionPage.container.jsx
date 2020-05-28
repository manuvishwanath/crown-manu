import React from 'react';
import  {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';

import {selectIsCollectionsLoaded} from '../../Redux/shop/shop.selector'
import withSpinner from '../../Components/withSpinner/with-spinner.component'
import collectionPage from './collectionPage.component'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
});

const collectionPageContainer = compose(
    connect(mapStateToProps),
    withSpinner
)(collectionPage);

export default collectionPageContainer;