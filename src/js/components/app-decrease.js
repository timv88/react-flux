var React = require('react');
var AppActions = require('../actions/app-actions.js');

var Decrease = React.createClass({
    handleClick: function(item) {
        AppActions.decreaseItem(this.props.index);
    },
    render: function() {
        return <button onClick={this.handleClick}>-</button>
    }
});

module.exports = Decrease;