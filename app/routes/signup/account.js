import Route from '@ember/routing/route';
import { hash } from 'rsvp';


export default Route.extend({
  queryParams: {
    expired: {
      refreshModel: true
    }
  },
  model(params) {
    if (params.expired === true) {
      this.set('controller.expired', true);
    }
    return hash({
      // countries: this.get('store').findAll('country'),
      client: this.modelFor('signup').client
    })
  },
});
