var React = require('react');
var AppActions = require('../actions/app-actions.js');
var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;

var Increase = React.createClass({
    handleClick: function(item) {
        AppActions.increaseItem(this.props.index);
    },
    render: function() {
        return  <Button bsStyle="success" bsSize="xsmall" className="btn-circle" onClick={this.handleClick}>
                    <Glyphicon glyph="plus"></Glyphicon>
                </Button>
    }
});

module.exports = Increase;