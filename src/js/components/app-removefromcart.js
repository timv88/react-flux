var React = require('react');
var AppActions = require('../actions/app-actions.js');
var Button = require('react-bootstrap').Button;

var RemoveFromCart = React.createClass({
    handleClick: function(item) {
        AppActions.removeItem(this.props.index);
    },
    render: function() {
        return <Button bsStyle="danger" bsSize="xsmall" className="btn-circle" onClick={this.handleClick}>x</Button>
    }
});

module.exports = RemoveFromCart;