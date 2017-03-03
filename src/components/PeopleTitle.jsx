var React = require('react');

var PeopleTitle = React.createClass({

  render: function() {
    return (
      <h4>{this.props.name.first+' '+this.props.name.last}</h4>
    )
  }
});
module.exports = PeopleTitle;