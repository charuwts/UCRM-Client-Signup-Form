import AjaxService from 'ember-ajax/services/ajax';
// import { computed } from '@ember/object';
// import ENV from "../config/environment";

export default AjaxService.extend({
  // host: ENV.APP.host,
  contentType: 'application/json; charset=utf-8',
});

