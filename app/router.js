import EmberRouter from '@ember/routing/router';
import config from 'speedrunners-tracker-frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('matches', function () {
    this.route('date', function () {
      this.route('index', { path: '/' });
      this.route('show', { path: ':date' });
    });

    this.route('map', function () {
      this.route('index', { path: '/' });
      this.route('show', { path: ':map' });
    });
  });
});
