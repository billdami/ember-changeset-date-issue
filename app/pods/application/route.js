import Route from '@ember/routing/route';
import { Changeset } from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import {validatePresence} from 'ember-changeset-validations/validators';

const validations = {
  dateOfBirth: [validatePresence(true)]
};

export default class ApplicationRoute extends Route {
  model() {
    return {
      dateOfBirth: new Date()
    };
  }

  setupController(controller, model) {
    super.setupController(...arguments);
    controller.changeset = Changeset(model, lookupValidator(validations), validations);
  }
}
