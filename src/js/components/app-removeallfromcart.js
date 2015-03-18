var React = require('react');
var AppActions = require('../actions/app-actions.js');
var AppStore = require('../stores/app-store.js');

var RemoveAllFromCart = React.createClass({

    componentWillMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
        this.render();
    },

    handleClick: function(item) {
        var all = AppStore.getCart();
        var allIndexes = [];
        for (var i=all.length - 1; i >= 0; i--) {
            /* because removeItem() works based on rendering index, 
               we need to remove the items starting with the last */
            allIndexes.push(i);
        }
        AppActions.removeItems(allIndexes);
    },

    render: function() {
        var maybeDisabled = AppStore.cartIsEmpty() ? "disabled" : "";
        return <button onClick={this.handleClick} disabled={maybeDisabled}>Clear cart</button>
    }
});

module.exports = RemoveAllFromCart;