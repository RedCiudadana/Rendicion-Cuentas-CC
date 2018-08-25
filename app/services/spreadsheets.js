import Service from '@ember/service';
import Tabletop from 'tabletop';
import { isNone } from'@ember/utils';
import RSVP from 'rsvp';


export default Service.extend({

  init() {
    this._super(...arguments);
  },

  fetch() {

    return new RSVP.Promise((resolve) => {

      let spreadsheetUrl = '1Lb5nlMXG-y_m4mH7Po_6q0LG3Q0E_S5-XeegNKLvLBQ';

      Tabletop.init({
        key: spreadsheetUrl,
        callback: (data) => {
          if (isNone(data)) {
            return resolve([]);
          }

          resolve(data);
        }
      });
    });
  }

});
