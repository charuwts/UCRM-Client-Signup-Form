import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';
// import ENV from "../config/environment";

export default Route.extend({
  ajax: service(),
  model() {
    return hash({
      // newService: this.get('store').createRecord('service'),
      client: this.get('store').createRecord('client'),
      // servicePlans: this.get('ajax').post(ENV.APP.host, {
      //   data: {
      //     pluginAppKey: ENV.APP.pluginAppKey,
      //     servicePlans: true
      //   } 
      // }),
    })
  },

});
