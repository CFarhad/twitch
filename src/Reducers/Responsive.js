

export const Responsive = (state = 4 , action)=>{
  switch (action.type) {
    case "COLLAPSE":
      return 4
    case "EXPAND":
      return 16
    default:
      return state;
  }
} 