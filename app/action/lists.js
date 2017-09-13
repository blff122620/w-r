
export function add(num){
  return {
    type: 'ADD',
    payload: {
      num,
    },
  };
}
export function minus(num){
  return {
    type: 'MINUS',
    payload: {
      num,
    }
  };
}
export function addTodo(text){
  return {
    type: 'ADD_TODO',
    payload: {
      text,
    }
  };
}
