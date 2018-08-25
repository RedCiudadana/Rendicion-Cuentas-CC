import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  spreadsheets: service(),

  clean(data) {

    let listData = [];

    for (var i = data.length - 1; i >= 0; i--) {
      let item = null;

      item = JSON.parse(JSON.stringify(data[i]));
      item["data"] = data[i];

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
        cc1: this.clean(value['cc-1'].elements),
        cc2: this.clean(value['cc-2'].elements),
        cc3: this.clean(value['cc-3'].elements),
        cc4: this.clean(value['cc-4'].elements),
        cc5: this.clean(value['cc-5'].elements),
        cc6: this.clean(value['cc-6'].elements),
        cc7: this.clean(value['cc-7'].elements),
        cc8: this.clean(value['cc-6'].elements)
      };
    });
  }

});
