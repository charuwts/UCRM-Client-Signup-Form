import DS from 'ember-data';
import { computed } from '@ember/object';
import AjaxServiceSupport from 'ember-ajax/mixins/ajax-support';
import ENV from "../config/environment";

export default DS.JSONAPIAdapter.extend(AjaxServiceSupport, {
  host: ENV.APP.host,
  headers: computed('host', function() {
    return {
      "Content-Type": 'application/json',
    }
  }),
  pathForType() {
    return '';
  }
});