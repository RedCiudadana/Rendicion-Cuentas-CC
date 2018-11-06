import Controller from '@ember/controller';

export default Controller.extend({
  chartOptions: {
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
    }
  },

  chartData: [
    {
      name: 'Expedientes ingresados',
      data: [400, 450, 500, 600, 500]
    }
  ]

});
