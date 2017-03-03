var React = require('react');

var PeoplePhoto = React.createClass({

  render: function() {
    return (
      <div className='row'>
          <div className='col-md-12'>
            <img className='thumbnail' src={this.props.photo}/>
          </div>
      </div>
    )
  }
});
module.exports = PeoplePhoto;