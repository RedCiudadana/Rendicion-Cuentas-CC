import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  spreadsheets: service(),

  // Agrega 'data' al diccionaro que contiene los datos para mostrar en tablas.
  remodelData(data) {

    let listData = [];

    for (var i = data.length - 1; i >= 0; i--) {
      let item = null;

      // Copia el diccionario
      item = JSON.parse(JSON.stringify(data[i]));
      // Almacena el diccionario en 'data'
      item["data"] = data[i];
      // Limpia 'data' para dejar solos los datos necesarios
      delete item["data"].id;
      delete item["data"].mes;
      delete item["data"].categoria;
      delete item["data"].enlaceCSV;
      delete item["data"].enlaceInforme;
      delete item["data"].estado;
      delete item["data"].informe;
      delete item["data"].temporalidad;
      delete item["data"].total;

      listData.push(item);
    }

    return listData

  },


  model() {
    return this.get('spreadsheets').fetch().then((value) => {
      return {
        resumen: value['resumen'].elements,
        cc1: this.remodelData(value['cc-1'].elements),
        cc2: this.remodelData(value['cc-2'].elements),
        cc3: this.remodelData(value['cc-3'].elements),
        cc4: this.remodelData(value['cc-4'].elements),
        cc5: this.remodelData(value['cc-5'].elements),
        cc6: this.remodelData(value['cc-6'].elements),
        cc7: this.remodelData(value['cc-7'].elements),
        cc8: this.remodelData(value['cc-6'].elements)
      };
    });
  }

});
