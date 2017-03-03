var Reflux = require('reflux');
var $ = require('jquery');
var PeopleActions = require('../actions/PeopleActions');

var PeopleStore = Reflux.createStore({
    listenables: [PeopleActions],
    people: '',

    init: function() {
        this.fetchList();
    },
    fetchList: function() {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            // jsonpCallback: 'jsonFlickrFeed',
            cache: false,
            context: this,
            success: function(data) {
                console.log('fetch people complete');
                this.people = data.results[0];
                this.trigger(this.people);
            }
        });
    }
});

module.exports = PeopleStore;