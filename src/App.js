import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

import ReviewMenu from './components/ReviewMenu';

import { REVIEWS } from './shared/review';
import { TAGS } from './shared/tag';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: REVIEWS,
      tagList: TAGS,
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
        <ReviewMenu reviewList={this.state.reviewList} tagList={this.state.tagList} />
      </div>
    );
  }
}
export default App;
