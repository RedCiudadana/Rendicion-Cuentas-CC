import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      cc1: this.modelFor('application').filterBy('categoria','1'),
      cc2: this.modelFor('application').filterBy('categoria','2'),
      cc3: this.modelFor('application').filterBy('categoria','3'),
      cc4: this.modelFor('application').filterBy('categoria','4'),
      cc5: this.modelFor('application').filterBy('categoria','5'),
      cc6: this.modelFor('application').filterBy('categoria','6'),
      cc7: this.modelFor('application').filterBy('categoria','7'),
      cc8: this.modelFor('application').filterBy('categoria','8')
    });
  }
});
