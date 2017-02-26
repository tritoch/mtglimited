import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchSets } from 'State/SetsRedux';
import { List, ListItem } from 'material-ui/List';

const propTypes = {
  availableSets: PropTypes.array.isRequired,
  fetchSets: PropTypes.func.isRequired,
};

const style = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
};

class SetSelector extends Component {
  componentDidMount() {
    this.props.fetchSets();
  }

  render() {
    const { availableSets } = this.props;

    return (
      <div style={style}>
        <h3>Select a Set</h3>
        {availableSets.length &&
          <List>
            {availableSets.map(set => (
              <Link to={`/draft/${set.abbr}`} key={set.abbr || 0}>
                <ListItem>{set.name}</ListItem>
              </Link>
            ))}
          </List>
        }
      </div>
    );
  }
}

SetSelector.propTypes = propTypes;

const mapStateToProps = state => ({
  availableSets: state.sets.get('availableSets').toJS(),
});

const mapDispatchToProps = dispatch => ({
  fetchSets: () => dispatch(fetchSets()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SetSelector);