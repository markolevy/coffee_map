import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

import ReviewMenu from './components/ReviewMenu';

import { REVIEWS } from './shared/review';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: REVIEWS,
    };
  }

  render() {
    return (
      <div className='App'>
        <Navbar color="primary">
          <div className="container" id="brand">
            <NavbarBrand>Paris Coffee</NavbarBrand>
          </div>
        </Navbar>
        <h1>Last coffee reviews !</h1>
        <ReviewMenu reviewList={this.state.reviewList} />
      </div>
    );
  }
}
export default App;
