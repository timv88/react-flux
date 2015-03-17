var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {
    addItem: function(item) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ADD_ITEM,
            item: item
        })
    },
    addItems: function(items) {
        var _this = this;
        items.forEach(function(item) {
            _this.addItem(item);
        })
    },
    removeItem: function(index) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_ITEM,
            index: index
        })
    },
    removeItems: function(indexes) {
        var _this = this;
        indexes.forEach(function(index) {
            _this.removeItem(index);
        })
    },
    increaseItem: function(index) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.INCREASE_ITEM,
            index: index
        })
    },
    decreaseItem: function(index) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.DECREASE_ITEM,
            index: index
        })  
    }
}

module.exports = AppActions;
