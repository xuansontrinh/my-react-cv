export default function(state=null, action) {
  switch(action.type) {
    case 'CHANGE_PAGE':
      return action.page;
    default:
      return state;
  }
}