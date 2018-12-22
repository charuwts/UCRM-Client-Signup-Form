import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  ajax: service(),
  model() {
    return hash({
      client: this.get('store').createRecord('client'),
    })
  },

});
