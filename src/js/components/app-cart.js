var React = require('react');
var AppStore = require('../stores/app-store.js');
var RemoveFromCart = require('../components/app-removefromcart.js');
var Increase = require('../components/app-increase.js');
var Decrease = require('../components/app-decrease.js');
var RemoveAllFromCart = require('../components/app-removeallfromcart.js');
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;

function cartItems() {
    return {items: AppStore.getCart()}
}

function getTotalItems() {
    // find best practice for svg, incl updating custom data-attribute
}

var Cart = React.createClass({

    getInitialState: function() {
        return cartItems();
    },

    componentWillMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(cartItems());
    },

    render: function() {
        var total = 0;
        var items = this.state.items.map(function(item, i) {
            var subtotal = item.cost * item.qty;
            var indexAttr = "index-" + i;
            total += subtotal;
            return (
                <tr key={i} data-index={indexAttr}>
                    <td><RemoveFromCart index={i} /></td>
                    <td>{item.title}</td>
                    <td>{item.qty}</td>
                    <td>
                        <ButtonToolbar>
                            <Increase index={i} />
                            <Decrease index={i} />
                        </ButtonToolbar>
                    </td>
                    <td>${subtotal}</td>
                </tr>
            )
        });
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Qty</th>
                        <th></th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" className="text-right">Total</td>
                        <td>${total}</td>
                    </tr>
                    <tr>
                        <td colSpan="5"><RemoveAllFromCart/></td>
                    </tr>
                </tfoot>
            </table>
        )
    }
});

module.exports = Cart;