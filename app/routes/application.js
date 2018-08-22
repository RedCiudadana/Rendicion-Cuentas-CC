import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({

  spreadsheets: service(),

  getData() {

    var spreadsheets = this.get('spreadsheets');

    return spreadsheets.fetch("resumen").then(function(value){

      var list = [];

      for (var i = value.length - 1; i >= 0; i--) {
        list.push(spreadsheets.fetch(value[i].id))
      }

      return RSVP.hash(list)

    }).catch(function(reason){
      console.error(reason);
    });
  },

  clean(item) {
    delete item.id;
    delete item.mes;
    delete item.categoria;
    delete item.enlaceCSV;
    delete item.enlaceInforme;
    delete item.estado;
    delete item.informe;
    delete item.temporalidad;
    delete item.total;

    return item
  },

  model() {
    return this.getData()
        .then((response) => {
          let list = [];
          let item
          for (let i = Object.keys(response).length - 1; i >= 0; i--) {
            for (let x = response[i].length - 1; x >= 0; x--) {
              item = JSON.parse(JSON.stringify(response[i][x]));
              item["data"] = response[i][x];
              item["data"] = this.clean(item["data"]);
              list.push(item);
            }
          }
          return list;
      });
  }

});
