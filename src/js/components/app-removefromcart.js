var React = require('react');
var AppActions = require('../actions/app-actions.js');
var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;

var RemoveFromCart = React.createClass({
    handleClick: function(item) {
        AppActions.removeItem(this.props.index);
    },
    render: function() {
        return  <Button bsStyle="danger" bsSize="xsmall" className="btn-circle" onClick={this.handleClick}>
                    <Glyphicon glyph="remove"></Glyphicon>
                </Button>
    }
});

module.exports = RemoveFromCart;