import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    weight: DS.attr('number'),
    timeToCook: DS.attr('number'),
    beReadyBy: DS.attr('date'),
    ingredients: DS.hasMany('ingredient')
});
