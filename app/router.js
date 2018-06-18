import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('signup', {path: '/'}, function() {
    this.route('account', {path: '/'});
    this.route('complete');
  });
});

export default Router;
