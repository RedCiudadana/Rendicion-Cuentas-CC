import Service from '@ember/service';
import RSVP from 'rsvp';


export default Service.extend({

  init() {
    this._super(...arguments);
  },

  fetch(worksheetName = 'data') {
    return RSVP.resolve({
      'resumen': fetch('data/resumen.json').then((response) => response.json()),
      'cc-1': fetch('data/cc-1.json').then((response) => response.json()),
      'cc-2': fetch('data/cc-2.json').then((response) => response.json()),
      'cc-3': fetch('data/cc-3.json').then((response) => response.json()),
      'cc-4': fetch('data/cc-4.json').then((response) => response.json()),
      'cc-5': fetch('data/cc-5.json').then((response) => response.json()),
      'cc-6': fetch('data/cc-6.json').then((response) => response.json()),
      'cc-7': fetch('data/cc-7.json').then((response) => response.json()),
      'cc-8': fetch('data/cc-8.json').then((response) => response.json()),
    });
  }
});
