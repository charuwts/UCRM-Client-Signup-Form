'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'ucrm-client-signup-form',
    environment,
    rootURL: '/',
    locationType: 'none',
    EmberENV: {
      FEATURES: {},
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },

    APP: {
      // These environment variables are overridden by the consuming plugin 
      rootElement: '#ember-signup',
      host: 'http://localhost:8080/_plugins/ucrm-client-signup/public.php',
      completionText: 'completiontextinformation',
      pluginAppKey: 'development_key',
    }
  };

  if (environment === 'development') {}

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {}

  return ENV;
};
