import React from 'react';

import Hello, {Test} from './Hello';



class App extends React.Component{
  render(){
    return (
      <div>
        <Hello name="World" />
        
      </div>
    );
  }
}

export default App;
