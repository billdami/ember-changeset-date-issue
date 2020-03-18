import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked changeset;
  @tracked dateString = '';

  @action
  updateDate() {
    const newDate = new Date(this.dateString);
    this.changeset.dateOfBirth = newDate;
    this.dateString = '';
    console.log('NEW DATE', newDate);
    console.log('NEW DATE - IN CHANGESET', this.changeset.dateOfBirth);
  }

  @action
  submit(event) {
    event.preventDefault();
    alert('submitted!');
  }
}
