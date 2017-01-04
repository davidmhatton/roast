import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    timeToCook: DS.Attr('number'),
    ingredients: DS.hasMany('ingredient')
});
