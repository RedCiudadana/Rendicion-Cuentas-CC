import Controller from '@ember/controller';

export default Controller.extend({
  chartOptions: {
    width: 300,
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
  },

  chartData: [
    {
      name: 'Ingresados',
      data: [400, 450, 500, 600, 500]
    }
  ],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 300
      },
      chartOptions: {
        legend: {
          enabled: false
        }
      }
    }]
  }

});
