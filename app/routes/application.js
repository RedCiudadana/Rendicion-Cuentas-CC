import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { dasherize } from '@ember/string';

var magistratura1 = {
  // chartData - Line Chart
  chartData : [
    {
      name: 'Expedientes asignados',
      data: [
        1,
        22,
        1,
        1,
        30,
        21,
        1,
        54,
        2,
        3,
        10,
        2,
        1,
        149
      ]
    }
  ],

  chartOptions: {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Expedientes asignados a Magistratura I'
    },
    xAxis: {
      categories: [
        'AMPARO',
        'AMPARO EN ÚNICA INSTANCIA',
        'AMPARO VERBAL',
        'APELACION DE AUTO DE LIQUIDACIÓN DE COSTAS',
        'APELACIÓN DE AUTO EN AMPARO',
        'APELACIÓN DE AUTO POR SUSPENSION',
        'APELACIÓN DE INCONSTITUCIONALIDAD DE LEY EN CASO CONCRETO',
        'APELACIÓN DE SENTENCIA EN AMPARO',
        'DUDA DE COMPETENCIA',
        'INCONSTITUCIONALIDAD DE LEY DE CARÁCTER GENERAL',
        'OCURSO DE QUEJA',
        'PLANTEAMIENTO DE ERROR SUBSTANCIAL EN EL PROCEDIMIENTO',
        'SOLICITUD INNOMINADA',
        'TOTAL'
      ]
    },
    yAxis: {
      title: {
        text: 'Cantidad (Total)'
      }
    },
    tooltip: {
      valueSuffix: ' expedientes asigandos'
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
};

var magistratura2 = {
  // chartData - Line Chart
  chartData : [
    {
      name: 'Expedientes asignados',
      data: [
        1,
        25,
        1,
        2,
        28,
        20,
        2,
        54,
        1,
        6,
        2,
        9,
        1,
        152
      ]
    }
  ],

  chartOptions: {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Expedientes asignados a Magistratura II'
    },
    xAxis: {
      categories: [
        'AMPARO',
        'AMPARO EN ÚNICA INSTANCIA',
        'AMPARO VERBAL',
        'APELACION DE AUTO DE LIQUIDACIÓN DE COSTAS',
        'APELACIÓN DE AUTO EN AMPARO',
        'APELACIÓN DE AUTO POR SUSPENSION',
        'APELACIÓN DE INCONSTITUCIONALIDAD DE LEY EN CASO CONCRETO',
        'APELACIÓN DE SENTENCIA EN AMPARO',
        'DUDA DE COMPETENCIA',
        'INCONSTITUCIONALIDAD DE LEY DE CARÁCTER GENERAL',
        'OCURSO DE HECHO',
        'OCURSO DE QUEJA',
        'PLANTEAMIENTO DE ERROR SUBSTANCIAL EN EL PROCEDIMIENTO',
        'TOTAL'
      ]
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
};

var magistratura3 = {
  // chartData - Line Chart
  chartData : [
    {
      name: 'Expedientes asignados',
      data: [
        1,
        27,
        1,
        29,
        20,
        4,
        50,
        3,
        9,
        144
      ]
    }
  ],

  chartOptions: {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Expedientes asignados a Magistratura III'
    },
    xAxis: {
      categories: [
        'AMPARO',
        'AMPARO EN ÚNICA INSTANCIA',
        'AMPARO VERBAL',
        'APELACIÓN DE AUTO EN AMPARO',
        'APELACIÓN DE AUTO POR SUSPENSION',
        'APELACIÓN DE INCONSTITUCIONALIDAD DE LEY EN CASO CONCRETO',
        'APELACIÓN DE SENTENCIA EN AMPARO',
        'INCONSTITUCIONALIDAD DE LEY DE CARÁCTER GENERAL',
        'OCURSO DE QUEJA',
        'TOTAL'
      ]
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
};

var magistratura4 = {
  // chartData - Line Chart
  chartData : [
    {
      name: 'Expedientes asignados',
      data: [
        23,
        1,
        1,
        31,
        19,
        1,
        50,
        3,
        11,
        1,
        141
      ]
    }
  ],

  chartOptions: {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Expedientes asignados a Magistratura IV'
    },
    xAxis: {
      categories: [
        'AMPARO EN ÚNICA INSTANCIA',
        'AMPARO VERBAL',
        'APELACION DE AUTO DE LIQUIDACIÓN DE COSTAS',
        'APELACIÓN DE AUTO EN AMPARO',
        'APELACIÓN DE AUTO POR SUSPENSION',
        'APELACIÓN DE INCONSTITUCIONALIDAD DE LEY EN CASO CONCRETO',
        'APELACIÓN DE SENTENCIA EN AMPARO',
        'INCONSTITUCIONALIDAD DE LEY DE CARÁCTER GENERAL',
        'OCURSO DE QUEJA',
        'PLANTEAMIENTO DE ERROR SUBSTANCIAL EN EL PROCEDIMIENTO',
        'TOTAL'
      ]
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
};

var magistratura5 = {
  // chartData - Line Chart
  chartData : [
    {
      name: 'Expedientes asignados',
      data: [
        101,
        5,
        127,
        91,
        13,
        297,
        8,
        39,
        5,
        686
      ]
    }
  ],

  chartOptions: {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Expedientes trasladados de Secretaría del Pleno a Secretaría General'
    },
    xAxis: {
      categories: [
        'AMPARO EN ÚNICA INSTANCIA',
        'APELACION DE AUTO DE LIQUIDACIÓN DE COSTAS',
        'APELACIÓN DE AUTO EN AMPARO',
        'APELACIÓN DE AUTO POR SUSPENSION',
        'APELACIÓN DE INCONSTITUCIONALIDAD DE LEY EN CASO CONCRETO',
        'APELACIÓN DE SENTENCIA EN AMPARO',
        'INCONSTITUCIONALIDAD DE LEY DE CARÁCTER GENERAL',
        'OCURSO DE QUEJA',
        'PLANTEAMIENTO DE ERROR SUBSTANCIAL EN EL PROCEDIMIENTO',
        'TOTAL',
      ]
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
};

var magistratura6 = {
  // chartData - Line Chart
  chartData : [
    {
      name: 'Expedientes asignados',
      data: [
        136,
        4,
        109,
        66,
        15,
        308,
        1,
        1,
        4,
        36,
        8,
        688
      ]
    }
  ],

  chartOptions: {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Expedientes trasladados a archivo'
    },
    xAxis: {
      categories: [
        'AMPARO EN ÚNICA INSTANCIA',
        'APELACION DE AUTO DE LIQUIDACIÓN DE COSTAS',
        'APELACIÓN DE AUTO EN AMPARO',
        'APELACIÓN DE AUTO POR SUSPENSION',
        'APELACIÓN DE INCONSTITUCIONALIDAD DE LEY EN CASO CONCRETO',
        'APELACIÓN DE SENTENCIA EN AMPARO',
        'DUDA DE COMPETENCIA',
        'INCONSTITUCIONALIDAD DE LEY DE CARÁCTER GENERAL',
        'OCURSO DE QUEJA',
        'PLANTEAMIENTO DE ERROR SUBSTANCIAL EN EL PROCEDIMIENTO',
        'TOTAL'
      ]
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
};

var gacela1 = {
  // chartData - Pie Chart
  chartData : [{
      name: 'Sentencias',
      colorByPoint: true,
      data: [
      {
        name: 'Sentencias cargadas en el sistema',
        y: 174
      },
      {
        name: 'Sentencias publicadas en el sistema',
        y: 266
      }
      ]
  }],

  // chartOptions - Pie Chart
  chartOptions : {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Unidad de Jurisprudencia y Gaceta',
      align: 'center',
      verticalAlign: 'top',
      y: 10
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: 20,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: 0,
            endAngle: 360,
            center: ['50%', '50%'],
            size: '80%'
        }
    }
  }
};

var gacela2 = {
  // chartData - Pie Chart
  chartData : [{
      name: 'Expedientes asignados',
      colorByPoint: true,
      data: [
      {
        name: 'Presidencia',
        y: 80
      },
      {
        name: 'Mag. I',
        y: 59
      },
      {
        name: 'Mag. II',
        y: 92
      },
      {
        name: 'Mag. III',
        y: 80
      },
      {
        name: 'Mag. IV',
        y: 22
      }
      ]
  }],

  // chartOptions - Pie Chart
  chartOptions : {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Magistratura ponente',
      align: 'center',
      verticalAlign: 'top',
      y: 10
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: 20,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: 0,
            endAngle: 360,
            center: ['50%', '50%'],
            size: '80%'
        }
    }
  }
};

var gacela3 = {
  // chartData - Pie Chart
  chartData : [{
      name: 'Expedientes',
      colorByPoint: true,
      data: [
      {
        name: 'Persona jurídica',
        y: 118
      },
      {
        name: 'Hombre',
        y: 109
      },
      {
        name: 'Mujer',
        y: 34
      },
      {
        name: 'Mixto',
        y: 5
      }
      ]
  }],

  // chartOptions - Pie Chart
  chartOptions : {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Accionante',
      align: 'center',
      verticalAlign: 'top',
      y: 10
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: 20,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: 0,
            endAngle: 360,
            center: ['50%', '50%'],
            size: '80%'
        }
    }
  }
};

export default Route.extend({

  spreadsheets: service(),

  magistratura1,
  magistratura2,
  magistratura3,
  magistratura4,
  magistratura5,
  magistratura6,
  gacela1,
  gacela2,
  gacela3,

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

    if (type === 'pie') {
      return this.generateChartDataPie(dict);
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
    dict['chartData'] = [
      {
        name: 'Ingresados',
        data: [
          parseInt(dict['Primer Informe'].total),
          parseInt(dict['Segundo Informe'].total),
          parseInt(dict['Tercer Informe'].total),
          parseInt(dict['Cuarto Informe'].total),
          parseInt(dict['Quinto Informe'].total),
          parseInt(dict['Sexto Informe'].total),
          parseInt(dict['Séptimo Informe'].total)
        ]
      }
    ];
    // chartOptions Line Chart
    dict['chartOptions'] = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Número de expedientes ingresados'
      },
      xAxis: {
        categories: ['Primer Informe', 'Segundo Informe', 'Tercer Informe', 'Cuarto Informe', 'Quinto Informe', 'Sexto Informe', 'Séptimo Informe']
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

  generateChartDataPie(dict) {
    // chartData - Pie Chart
    let data = [];
    // Ordena el array de mayor a menor
    dict.acumulado.data.sort(function(first, second) {
      return second[1] - first[1];
    });
    // Obteniendo datos de acumulado por tipo
    for (var i = dict.acumulado.data.length - 1; i >= 0; i--) {
      data.push({
        name: this.humanize(dasherize(dict.acumulado.data[i][0])),
        y: parseInt(dict.acumulado.data[i][1])
      });
    }

    dict['chartData'] = [{
        name: 'Expedientes',
        colorByPoint: true,
        data: data
    }];

    // chartOptions - Pie Chart
    dict['chartOptions'] = {
      chart: {
        type: 'pie',
      },
      title: {
        text: '',
        align: 'center',
        verticalAlign: 'middle',
        y: 0
      },
      plotOptions: {
          pie: {
              dataLabels: {
                  enabled: true,
                  distance: -50,
                  style: {
                      fontWeight: 'bold',
                      color: 'white'
                  }
              },
              startAngle: 0,
              endAngle: 360,
              center: ['50%', '50%'],
              size: '80%'
          }
      }
    };

    return dict;
  },

  humanize(string) {
    let result = string.toLowerCase().replace(/_+|-+/g, ' ');
    return result.charAt(0).toUpperCase() + result.slice(1);
  },

  model() {
    return this.get('spreadsheets').fetch().then((value) => {
      return {
        resumen: this.mapByIdDictonary(value['resumen'].elements),
        cc1: this.remodelData(value['cc-1'].elements, 'line'),
        cc2: this.remodelData(value['cc-2'].elements, 'line'),
        cc2chart: [magistratura1, magistratura2, magistratura3, magistratura4, magistratura5, magistratura6],
        cc3: this.remodelData(value['cc-3'].elements, 'line'),
        cc4: this.remodelData(value['cc-4'].elements, 'line'),
        cc5: this.remodelData(value['cc-5'].elements, 'line'),
        cc6: this.remodelData(value['cc-6'].elements, 'pie'),
        cc6chart: [gacela1, gacela2, gacela3],
        cc7: this.remodelData(value['cc-7'].elements, null),
        cc8: this.remodelData(value['cc-8'].elements, 'pie')
      };
    });
  }

});
