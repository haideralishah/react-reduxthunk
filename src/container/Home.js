import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInvite } from '../store/action/action';

class HomeContainer extends Component {
  render() {
    const {
            todos
        } = this.props
    return (
      <div>
        <div>
          {todos}
          <h2>Welcome to Home</h2>

          <button onClick={() => this.props.getInvite('haider')}>Update Todoes Assync</button>

        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todo.todos
  };
}

function mapDispatchToProps(dispatch) {

  return {
    // onGetInvite: () => dispatch(getInvite()),
    getInvite: (name) => dispatch(getInvite(name))
  };
}


const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export default Home;

