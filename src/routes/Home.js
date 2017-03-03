
import React from 'react';

import ImageGrid from '../components/ImageGrid';

import ImageActions from '../actions/ImageActions';

import { Button } from 'react-toolbox/lib/button';
//
// var Button = require('react-bootstrap').Button;
var Well =  require('react-bootstrap').Well;

const Home = React.createClass({

  render: function(){
    return(
      <div className='container'>
        <Well>
          <Button onClick={ImageActions.fetchList} label="Fetch new images please!" />          
          <Well>
            <a href="https://github.com/ochronus/reflux-example">Source @ GitHub</a>
          </Well>
        </Well>
        <Well>
          <ImageGrid></ImageGrid>
        </Well>

      </div>
    );
  }
});

export default Home;