import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, currentURL, find, fillIn, blur } from '@ember/test-helpers';

module('Acceptance | signup', function(hooks) {
  setupApplicationTest(hooks);

  test('signup form fields', async function(assert) {
    assert.expect(4);

    // ####
    // # Account page test: Fillout form and check validations before being allowed to proceed
    // ####
    await visit('/');
    assert.equal(currentURL(), '/', 'Current URL should be /');
    assert.equal(find('#proceed span').innerHTML.trim(), 'Provide Info', 'Starts requiring info');

    await fillIn('#firstName input', 'firstName test');
    await fillIn('#lastName input', 'lastName test');
    await fillIn('#zip input', '22222');
    await fillIn('#street1 input', 'street1 test');
    await fillIn('#city input', 'city test');
    await fillIn('#phone input', '2223334444');

    await fillIn('#email input', 'e'); // Enter invalid eamil
    await blur('#email input'); // Focus out
    assert.equal(find('#email .invalid-feedback').innerHTML.trim(), 'This field must be a valid email address', 'email should be invalid'); // check notification

    await fillIn('#email input', 'email@test.com'); // Enter valid email
    assert.equal(find('#proceed span').innerHTML.trim(), 'Signup', 'Should allow to proceed');

  });
});
