import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';
import { computed } from '@ember/object';
const { attr } = DS;

const Validations = buildValidations({
  firstName: [
    validator('presence', true),
    validator('length', {
      min: 3,
    })
  ],
  lastName: [
    validator('presence', true),
    validator('length', {
      min: 3,
    })
  ],
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  phone: [
    validator('presence', true),
  ]
});

export default DS.Model.extend(Validations, {
  firstName: attr('string'),
  lastName: attr('string'),
  contacts: attr(),
  street1: attr('string'),
  // street2: attr('string'),
  zipCode: attr('string'),
  city: attr('string'),

  email: attr('string'),
  phone: attr('string'),

  // state: belongsTo('state'),
  stateId: attr('number', {defaultValue: 6}),
  countryId: attr('number', {defaultValue: 249}),

  agreedToTAC: attr('boolean', {defaultValue: false}),

  fullAddress: computed('street1', 'zipCode', 'city', function() {
    return this.get('street1') + ', ' + this.get('city') + ', CO. ' + this.get('zipCode')
  }),

  // stateId: computed('state', function() {
  //   return this.get('state.id');
  // }),
  // country: belongsTo('country'),
  // countryId: computed('country', function() {
  //   return this.get('country.id');
  // }),
});