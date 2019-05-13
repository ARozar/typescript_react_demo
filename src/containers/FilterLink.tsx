import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

interface StateToProps {
    active: boolean;
}
  
interface DispatchFromProps {
    onClick: () => void;
}

interface OwnProps {
    filter: string;
}

const mapStateToProps = (state, ownProps: OwnProps):  StateToProps => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps): DispatchFromProps => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect<StateToProps, DispatchFromProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(Link)