
export default function(state = 0, action){
  switch (action.type) {
    case 'ADD':
      return state + action.payload.num;
      break;
    case 'MINUS':
      return state - action.payload.num;
      break;
    default:
      return state;
  }
};
