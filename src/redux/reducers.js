import { combineReducers } from 'redux'
const cons = {
  // import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
  // const { SHOW_ALL } = VisibilityFilters
  // function visibilityFilter(state = SHOW_ALL, action) {
  //   switch (action.type) {
  //     case SET_VISIBILITY_FILTER:
  //       return action.filter
  //     default:
  //       return state
  //   }
  // }
  // function todos(state = [], action) {
  //   switch (action.type) {
  //     case ADD_TODO:
  //       return [
  //         ...state,
  //         {
  //           text: action.text,
  //           completed: false
  //         }
  //       ]
  //     case TOGGLE_TODO:
  //       return state.map((todo, index) => {
  //         if (index === action.index) {
  //           return Object.assign({}, todo, {
  //             completed: !todo.completed
  //           })
  //         }
  //         return todo
  //       })
  //     default:
  //       return state
  //   }
  // }
}
const initialState = {
  userInfo: null
}

function global(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        userInfo: action.userInfo
      }
    case 'DELETE_USER':
      return {
        ...state,
        userInfo: null
      }
    case 'OTHER':
      return {
        ...state
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  global
})

export default reducers
