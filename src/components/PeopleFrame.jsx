var React = require('react');
var Reflux = require('reflux');

var PeopleStore = require('../stores/PeopleStore');

var PeoplePhoto = require('./PeoplePhoto');
var PeopleTitle = require('./PeopleTitle');

var PeopleFrame = React.createClass({
	mixins: [Reflux.connect(PeopleStore, 'peoplestore')],
	render: function() {

		if (this.state.peoplestore) {

			return (
				<div className='container'>
					<PeoplePhoto photo={this.state.peoplestore.picture.large}/>
					<PeopleTitle name={this.state.peoplestore.name}/>
				</div>
				)
			}
			else {
				return (<h1>Loading..</h1>)
			}
		}
	});
	module.exports = PeopleFrame;