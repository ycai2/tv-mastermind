// @flow
import { connect } from 'react-redux';
import { searchShows } from '../../actions/search-shows/search-shows';
import ShowsList from '../../components/show-list/show-list';

const mapStateToProps = state => ({
  searchResults: state.searchResults,
});

const mapDispatchToProps = dispatch => ({
  searchShows: queryParam => dispatch(searchShows(queryParam)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowsList);
