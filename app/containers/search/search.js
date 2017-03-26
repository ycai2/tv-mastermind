// @flow
import { connect } from 'react-redux';
import { searchShows } from '../../actions/search-shows/search-shows';
import ShowsList from '../../components/shows-list';

const mapStateToProps = state => ({
  searchResults: state.searchResults,
});

const mapDispatchToProps = dispatch => ({
  searchShows: userId => dispatch(searchShows(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowsList);
