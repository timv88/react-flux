var React = require('react');
var AppActions = require('../actions/app-actions.js');
var AppStore = require('../stores/app-store.js');
var Button = require('react-bootstrap').Button;

var AddAllToCart = React.createClass({
    handleClick: function() {
        var all = AppStore.getCatalog();
        AppActions.addItems( all );
    },
    render: function() {
        return <Button bsStyle="primary" bsSize="small" onClick={this.handleClick}>Add all</Button>
    }
});

module.exports = AddAllToCart;