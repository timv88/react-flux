var React = require('react');
var AppActions = require('../actions/app-actions.js');
var Button = require('react-bootstrap').Button;

var Increase = React.createClass({
    handleClick: function(item) {
        AppActions.increaseItem(this.props.index);
    },
    render: function() {
        return <Button bsStyle="success" bsSize="xsmall" className="btn-circle" onClick={this.handleClick}>+</Button>
    }
});

module.exports = Increase;