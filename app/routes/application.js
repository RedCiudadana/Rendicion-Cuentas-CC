import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import Tabletop from 'tabletop';
import { isNone } from '@ember/utils';
import EmberObject from '@ember/object';

var Categoria = EmberObject.extend({
  id: '',
  title: '',
  description: '',
  image: '',
  enlaceIcono: ''
});

var Informe = EmberObject.extend({
  id: '',
  estado: '',
  mes: '',
  temporalidad: ''
});

export default Route.extend({

  getData(sheet) {
    return new RSVP.Promise((resolve, reject) => {
      Tabletop.init({ 
        key: '1Lb5nlMXG-y_m4mH7Po_6q0LG3Q0E_S5-XeegNKLvLBQ', 
        callback: (data) => {

          if (isNone(data[sheet])) {
            reject('Sheet inexistente');
          }

          resolve(
            data[sheet].elements
            );

        },
      });
    })
    .catch((error) => {
      console.error("Error con tabletop! " + error);
    });
  },

  objectizar(list) {
    var resultado = [];
    for (var i = list.length - 1; i >= 0; i--) {
      var obj = list[i];
      var obj2 = Categoria.create({
        id: obj.id,
        title: obj.eje,
        description: obj.description,
        image: "",
        enlaceIcono: obj.enlaceIcono,
        informes: []
      });
      resultado.push(obj2);
    }
    return resultado
  },

  model() {
    return RSVP.hash({
      resumen: this.getData('resumen'),
      cc1: this.getData('cc-1')
    });
  }

});
