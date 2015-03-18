var React = require('react');
var AppActions = require('../actions/app-actions.js');
var AppStore = require('../stores/app-store.js');

var CartCount = React.createClass({

    getInitialState: function() {
        return { itemCount: 0 }
    },

    componentWillMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState({ itemCount: AppStore.getCartItemCount() }, function() {
            console.log("setState callback");
        })
    },

    render: function() {
        return (
            <div className="shopping-cart-icon" data-icon-count={this.state.itemCount}>
                <svg viewBox="0 0 59.2 40.1">
                    <path d="M42.8,17.6H30c-1.7,0-3-1.3-3-3s1.3-3,3-3h12.8c1.7,0,3,1.3,3,3S44.5,17.6,42.8,17.6z"></path>
                    <circle cx="23.7" cy="36.1" r="4"></circle>
                    <circle cx="49.1" cy="36.1" r="4"></circle>
                    <path d="M57,5.1c-1.6-0.4-3.2,0.5-3.7,2.1l-4.1,15.3H23.6L18.2,2.2C17.8,0.9,16.7,0,15.3,0H3.1c-1.7,0-3,1.3-3,3s1.3,3,3,3h7.6c1.4,0,2.5,0.9,2.9,2.2l0,0l4.8,18.1c0.4,1.3,1.5,2.2,2.9,2.2h30.2c1.4,0,2.5-0.9,2.9-2.2l4.7-17.5C59.5,7.1,58.6,5.5,57,5.1z"></path>
                </svg>    
            </div>
        );
    }
});

module.exports = CartCount;