import { SHOW_ALL, VisibilityFilterType, VisibilityFilterAction } from '../actions'


const visibilityFilter = (state = SHOW_ALL, action :VisibilityFilterAction): VisibilityFilterType => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter