import Service from '@ember/service';
import Tabletop from 'tabletop';
import { isNone } from'@ember/utils';
import RSVP from 'rsvp';


export default Service.extend({

  init() {
    this._super(...arguments);
  },

  fetch(worksheetName = 'data') {

    return new RSVP.Promise((resolve) => {

      let spreadsheetUrl = '1Lb5nlMXG-y_m4mH7Po_6q0LG3Q0E_S5-XeegNKLvLBQ';

      Tabletop.init({
        key: spreadsheetUrl,
        callback: (data) => {
          if (isNone(data[worksheetName])) {
            let errorMessage = `Got no answer for spreadsheet ${worksheetName}`;
            // TODO: Get back vorkin
            // this.get('flashMessages').danger(errorMessage, {sticky: true});

            // TODO: Convertir en alerta de console.log
            console.error(errorMessage);

            return resolve([]);
          }

          if (isNone(data[worksheetName].elements)) {
            let errorMessage = `Got a problem with the elements for spreadsheet ${worksheetName}`;
            // TODO: Get back vorkin
            // this.get('flashMessages').danger(errorMessage, {sticky: true});

            // TODO: Convertir en alerta de console.log
            console.log(errorMessage);

            return resolve([]);
          }

          resolve(data[worksheetName].elements);
        }
      });
    });
  }

});
