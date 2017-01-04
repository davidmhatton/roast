import DS from 'ember-data';

export default DS.Model.extend({
    feature: DS.attr('feature'),
    sides: DS.hasMany('side'),
    beReadyBy: DS.attr('date'),
    toServe: DS.attr('number')
});
