const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};



/// Dont change state like this. 
// const countReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCURMENT":
//       state.count++;
//       return state;

//     case "DECREMENT":
//       state.count--;
//       return state;

//     default:
//       return state;
//   }
// };




export default countReducer;
