import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({

  spreadsheets: service(),

  getResumen() {
    return this.get('spreadsheets').fetch('resumen');
  },

  getData() {

    var spreadsheets = this.get('spreadsheets');

    return this.getResumen().then(function(value){

      var list = [];

      for (var i = value.length - 1; i >= 0; i--) {
        list.push(spreadsheets.fetch(value[i].id))
      }

      return RSVP.hash(list)

    }).catch(function(reason){
      console.error(reason);
    });
  },

  model() {
    return RSVP.hash({
      resumen: this.getResumen(),
      ejes: 
      this.getData()
        .then((response) => {
          let list = [];
          for (let i = Object.keys(response).length - 1; i >= 0; i--) {
            for (let x = response[i].length - 1; x >= 0; x--) {
              console.log(response[i][x]);
              list.push(response[i][x]);
            }
          }
          return list;
      })
    });
  }

});
