import React from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';
import './shop-item.css';

export function ShopItem({item}) {

    const {brand, title, description, descriptionFull, price, currency} = item;

    return (
        <div className="shop-item">
            <h2>{brand}</h2>
            <h1>{title}</h1>
            <div className="description">
                <h3>{description}</h3>
                <p>{descriptionFull}</p>
            </div>
            <div className="divider"></div>
            <div className="shop-item__cart">
                <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={currency} decimalScale={2} fixedDecimalScale={true} renderText={value => <div className="price">{value}</div>} />
                <button>Добавить в корзину</button>
            </div>
        </div>
    );
} 

ShopItem.propTypes = {
    item: PropTypes.shape({
        brand: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        descriptionFull: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired
    })
};