var Reflux = require('reflux');
var $ = require('jquery');
var ImageActions = require('../actions/ImageActions');

var ImageStore = Reflux.createStore({
    listenables: [ImageActions],
    peopleList: [],
    sourceUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=hondacivic',

    init: function() {
        this.fetchList();
    },
    fetchList: function() {
        $.ajax({
            url: this.sourceUrl,
            dataType: 'jsonp',
            jsonpCallback: 'jsonFlickrFeed',
            cache: false,
            context: this,
            success: function(data) {
                console.log('fetch complete');
                this.imagelist = data.items;
                this.trigger(this.imagelist);
            }
        });
    }
});

module.exports = ImageStore;