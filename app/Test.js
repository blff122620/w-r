import React from 'react';
import PropTypes from 'prop-types';

import { add, minus, addTodo } from './action/lists';

import store from './store/repo';

const { getState, dispatch, subscribe } = store;
// store reducer action
// import { getState, dispatch, subscribe } from store
// 获取状态，分发事件，订阅事件


class Test extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    console.log('hi');
    subscribe(() => {
      this.setState({});
    });
  }
  handleClick(e){
    const opr = e.target.value;
    switch (opr) {
      case '+':
        dispatch((dispatch, getState) => {
          setTimeout(() => {
            dispatch(add(1));
          },1000);

        });
        break;
      case '-':
        dispatch(minus(1));
        break;
      case 'submit':
        dispatch(addTodo(this.textarea.value));
        this.textarea.value = '';
        this.textarea.focus();
      default:

    }
  }
  render () {
    const { counter, todos } = this.props.store.getState();
    return (
      <div>
        <label htmlFor="">结果
          <input type="text" readOnly="readOnly" value={counter}/>
        </label>
        <input type="button" value="+" onClick={this.handleClick}/>
        <input type="button" value="-" onClick={this.handleClick}/>
        <textarea name="" id="" cols="30" rows="10" readOnly value={todos.join(',')}></textarea>
        <textarea name="" id="j-todos" cols="30" rows="10" ref={ textarea => this.textarea = textarea}>
        </textarea>
        <input type="button" value="submit" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Test;
