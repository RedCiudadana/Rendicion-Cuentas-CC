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

    // return this.getResumen().then(function(resolve){

    //   let list = []

    //   for (var i = resolve.resumen.length - 1; i >= 0; i--) {
    //     list.push(resolve.resumen[i].id)
    //   }

    //   return {
    //     resumen: resolve.resumen,
    //     ejes: list
    //   };

    // }).catch(function(reason){
    //   console.error(reason);
    // });
    return RSVP.hash({
      resumen: this.getResumen(),
      ejes: this.getData()
    });
  }

});
