import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  spreadsheets: service(),

  // Agrega 'data' al diccionaro que contiene los datos para mostrar en tablas.
  remodelData(data, type='line') {

    let listData = [];

    for (let i = data.length - 1; i >= 0; i--) {
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

      // Crea un array con arrays de los datos.
      // ej:
      // [["Expedientes ingresado", 100], ...]
      var items = Object.keys(item["data"]).map(function(key) {
        return [key, item["data"][key]];
      });

      // Ordena el array de mayor a menor
      items.sort(function(first, second) {
        return second[1] - first[1];
      });

      // Actualiza item.data con el array ordenado.
      item.data = items;

      // Agrega a la lista de datos
      listData.push(item);
    }

    var dict = {};7

    for (let i = listData.length - 1; i >= 0; i--) {
      dict[listData[i].informe] = listData[i];
    }

    dict['actual'] = listData.findBy('estado', 'actual');
    dict['anterior'] = listData.findBy('estado', 'anterior');

    if (type === 'line') {
      return this.generateChartDataLines(dict);
    }

    return dict;

  },

  mapByIdDictonary(listData) {
    var dict = {};

    for (let i = listData.length - 1; i >= 0; i--) {
      dict[listData[i].id] = listData[i];
    }

    return dict;
  },

  generateChartDataLines(dict) {
    // chartData - Line Chart
    dict['charData'] = [
      {
        name: 'Ingresados',
        data: [
          parseInt(dict['Primer Informe'].total),
          parseInt(dict['Segundo Informe'].total),
          parseInt(dict['Tercer Informe'].total),
          parseInt(dict['Cuarto Informe'].total)
        ]
      }
    ];
    // chartOptions Line Chart
    dict['chartOptions'] = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Número de expedientes ingresados'
      },
      xAxis: {
        categories: ['Primer Informe', 'Segundo Informe', 'Tercer Informe', 'Cuarto Informe', 'Quinto Informe']
      },
      yAxis: {
        title: {
          text: 'Cantidad (Total)'
        }
      },
      tooltip: {
        valueSuffix: ' expedientes'
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
    }

    return dict;
  },


  model() {
    return this.get('spreadsheets').fetch().then((value) => {
      return {
        resumen: this.mapByIdDictonary(value['resumen'].elements),
        cc1: this.remodelData(value['cc-1'].elements, 'line'),
        cc2: this.remodelData(value['cc-2'].elements, 'line'),
        cc3: this.remodelData(value['cc-3'].elements, 'line'),
        cc4: this.remodelData(value['cc-4'].elements, 'line'),
        cc5: this.remodelData(value['cc-5'].elements, 'line'),
        cc6: this.remodelData(value['cc-6'].elements, null),
        cc7: this.remodelData(value['cc-7'].elements, null),
        cc8: this.remodelData(value['cc-8'].elements, null)
      };
    });
  }

});
