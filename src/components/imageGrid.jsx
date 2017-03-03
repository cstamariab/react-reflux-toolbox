var React = require('react');
var Reflux = require('reflux');

var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var ImagesStore = require('../stores/ImagesStore');

var ImageGrid = React.createClass({
	mixins: [Reflux.connect(ImagesStore, 'imagestore')],
	render: function() {
		if (this.state.imagestore) {
			return (
				<div className='container'>
					<Row>
						{this.state.imagestore.map(function (image) {
							return (
								<Col xs={6} sm={4} lg={3}>
									<a href={ image.link }>
										<img className="img-responsive flickr-thumbnail" src={ image.media.m }></img>
									</a>
								</Col>);
							})}
					</Row>
				</div>
				);
			}
			else {
				return (<Row>Loading</Row>);
			}
		}
	});
	module.exports = ImageGrid;