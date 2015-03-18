/** @jsx React.DOM */
var React = require('react');
var Catalog = require('../components/app-catalog.js');
var Cart = require('../components/app-cart.js');
var CartCount = require('../components/app-cartcount.js');
var AddAllToCart = require('../components/app-addalltocart.js');

var APP = React.createClass({
    render: function(){
        return (
            <div>
                <CartCount />
                <h1>Catalog <AddAllToCart /></h1>
                <Catalog />
                <h1>Cart</h1>
                <Cart /> 
            </div>
        )
    }
});

module.exports = APP;