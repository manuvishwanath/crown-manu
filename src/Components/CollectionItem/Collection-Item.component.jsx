import React from 'react';
import { connect } from 'react-redux';

import { AddItem } from '../../Redux/cart/cart.actions';
import './Collection-Item.styles.scss'
import CustomButton from '../Custom-Button/Custom-Button.component'

const CollectionItem = ({ item, addItem }) => {
    return (
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage: `url(${item.imageUrl})`
                }} />
            <div className="collection-footer">
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add To Cart</CustomButton>
        </div>
    );
}
const mapDispatchToProp = dispatch => ({
    addItem: item => dispatch(AddItem(item))
})

export default connect(null, mapDispatchToProp)(CollectionItem);