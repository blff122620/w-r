import React from 'react';

class Hello extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      peopleIds: [],
      peoples: [
        // {
        //   id: 'some',
        //   value: 'some',
        // },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    const { value, checked, id } = e.target;
    if(checked){
      this.setState((prevState) => {
        prevState.peoples.push({ id, value });
        return {

          peoples: prevState.peoples,
        }
      });
    }
    else{
      this.setState((prevState) => {

        const newPeoples = prevState.peoples.filter((people, idx, arr) => {
          if(people.id === id){
            return false;
          }
          return true;
        });
        return {
          peoples: newPeoples,
        };
      });
    }
  }
  render(){
    return (
      <div>
        hello {this.props.name}
        <div>
          <input readOnly type="text" id="people" value={this.state.peoples.map(peo => peo.value).join(',')}/>
        </div>
        <ul>
          <li>
            <label htmlFor="item1">people1
              <input onChange={this.handleChange} type="checkbox" id="item1" name="people" value="people1"/>
            </label>
          </li>
          <li>
            <label htmlFor="item2">people2
              <input onChange={this.handleChange} type="checkbox" id="item2" name="people" value="people2"/>
            </label>
          </li>
          <li>
            <label htmlFor="item3">people3
              <input onChange={this.handleChange} type="checkbox" id="item3" name="people" value="people3"/>
            </label>
          </li>
          <li>
            <label htmlFor="item4">people4
              <input onChange={this.handleChange} type="checkbox" id="item4" name="people" value="people4"/>
            </label>
          </li>
        </ul>

      </div>
    );
  }
}

export default Hello;
