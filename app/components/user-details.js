import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import ENV from "../config/environment";

export default Component.extend({
  ajax: service(),
  store: service(),
  classNames: ['container-fluid'],
  processing: false,
  states: computed('model.client.countryId', function() {
    if ((this.get('model.client.countryId') == 249) || (this.get('model.client.countryId') == 54)) {
      return this.get('ajax').post(ENV.APP.host, {
        data: {
          pluginAppKey: ENV.APP.pluginAppKey,
          country_id: this.get('model.client.countryId')
        }
      });      
    } else {
      this.set('model.client.stateId', null);
      return false;
    }
  }),

  actions: {
    selectCountry(country) {
      this.set('model.client.countryId', country.id);
      this.set('selectedCountry', country);

      this.set('model.client.stateId', null);
      this.set('selectedState', null);
    },
    selectState(state) {
      this.set('model.client.stateId', state.id);
      this.set('selectedState', state);
    },
    submit(client) {
      client.validate().then(({ validations }) => {
        this.set('pending', true);
        this.set('processing', true);
        this.set('failure', false);

        if (validations.get('isValid')) {
          
          this.get('ajax').post(ENV.APP.host, {
            headers: {
              "Content-Type": 'application/json'
            },
            data: {
              pluginAppKey: ENV.APP.pluginAppKey,
              client: {
                "clientType": 1,
                "firstName": this.get('model.client.firstName'),
                "lastName": this.get('model.client.lastName'),
                "street1": this.get('model.client.street1'),
                "street2": this.get('model.client.street2'),
                "city": this.get('model.client.city'),
                "countryId": this.get('model.client.countryId'),
                "stateId": this.get('model.client.stateId'),
                "zipCode": this.get('model.client.zipCode'),
                "username": this.get('model.client.email'),
                "contacts": [
                  {
                    email: this.get('model.client.email'),
                    phone: this.get('model.client.phone'),
                    name: this.get('model.client.firstName') + ' ' + this.get('model.client.lastName')
                  }
                ],
                // "attributes": [
                //   {
                //     value: String(this.get('model.client.agreedToTAC')),
                //     customAttributeId: 2,
                //   }
                // ]

              },
            } 
          }).catch((resp) => {
            if ((resp.payload !== undefined) && (resp.payload !== null)) {
              if (resp.payload.redirect === true) {
                this.set('failure', false);
                // this.transitionToRoute('signup.account', { queryParams: { expired: true }});
                this.get('changeRoute')('signup.account');
              } else {
                this.set('errors', resp.payload.errors);
              }
            }
            this.set('pending', false);
            this.set('failure', true);
          }).then(() => {
            if (this.get('failure') !== true) {
              this.get('changeRoute')('signup.complete');
            }
            this.set('pending', false);
          });

          this.set('processing', false);
        }
        
      });
    }

  }
});
