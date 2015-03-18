var React = require('react');
var AppActions = require('../actions/app-actions.js');
var Button = require('react-bootstrap').Button;

var AddToCart = React.createClass({
    handleClick: function() {
        AppActions.addItem(this.props.item);
    },
    render: function() {
        return <Button bsStyle="primary" bsSize="xsmall" onClick={this.handleClick}>Add to cart</Button>
    }
});

module.exports = AddToCart;