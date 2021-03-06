/**
 * @fileOverview Routes for City.
 */
var log = require('logg').getLogger('app.router.city');

var HomeCtrl = require('../controllers/city/index.ctrl');

var router = module.exports = {};

/**
 * Initialize routes.
 *
 * @param {express} app Express instance.
 */
router.init = function(app) {
  log.fine('init() :: initializing routes...');
  var homeCtrl = HomeCtrl.getInstance();

  app.get('/', homeCtrl.use);
};
