import React from 'react';

import Hello from './Hello';
import Test from './Test';
import store from './store/repo';


const Title = value => <div>{Object.keys(value)}</div>;

class App extends React.Component{
  render(){
    return (
      <div>
        <Hello name="World" />
        <div>
          <Test store={store}></Test>
          <Title some="hi"></Title>
        </div>
      </div>
    );
  }
}

export default App;
