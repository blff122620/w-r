export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.payload.text]);
    default:
      return state;
  }
};
