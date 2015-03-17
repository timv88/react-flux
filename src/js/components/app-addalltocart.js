var React = require('react');
var AppActions = require('../actions/app-actions.js');
var AppStore = require('../stores/app-store.js');

var AddAllToCart = React.createClass({
    handleClick: function() {
        var all = AppStore.getCatalog();
        AppActions.addItems( all );
    },
    render: function() {
        return <button onClick={this.handleClick}>Add all</button>
    }
});

module.exports = AddAllToCart;