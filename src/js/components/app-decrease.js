var React = require('react');
var AppActions = require('../actions/app-actions.js');
var Button = require('react-bootstrap').Button;
var Glyphicon = require('react-bootstrap').Glyphicon;

var Decrease = React.createClass({
    handleClick: function(item) {
        AppActions.decreaseItem(this.props.index);
    },
    render: function() {
        return  <Button bsStyle="warning" bsSize="xsmall" className="btn-circle" onClick={this.handleClick}>
                    <Glyphicon glyph="minus"></Glyphicon>
                </Button>
    }
});

module.exports = Decrease;