"use strict";
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var {ActionTypes} = AppConstants;

module.exports = {

  logout () {
    AppDispatcher.handleViewAction({
      type: ActionTypes.LOGOUT,
      logout: true
    });
  }

};