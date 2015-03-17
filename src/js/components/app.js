/** @jsx React.DOM */
var React = require('react');
var Catalog = require('../components/app-catalog.js');
var Cart = require('../components/app-cart.js');

var AddAllToCart = require('../components/app-addalltocart.js')
var RemoveAllFromCart = require('../components/app-removeallfromcart.js')

var APP = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Catalog <AddAllToCart /></h1>
                <Catalog />
                <h1>Cart <RemoveAllFromCart /></h1>
                <Cart /> 
            </div>
        )
    }
});

module.exports = APP;