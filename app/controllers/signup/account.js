import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    changeRoute(route) {
      this.transitionToRoute(route);
    }
  }
});
