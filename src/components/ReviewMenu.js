import * as React from 'react';

import './css/bootstrap-reboot.css'
import './css/bootstrap-reboot.min.css'
import './css/bootstrap.css'
import './css/bootstrap.min.css'
import './css/style.css'

import ReviewElt from './ReviewElt';

class ReviewMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //type: 'all',
            tagFilter: [],
        };
    }

    render() {
        /*
        const filteredList = this.props.reviewList.filter(review => {
            if (this.state.tags === [])
                return true;
            else {
                return this.state.tags.some(elm => review.tag.includes(elm));
            }
        });*/
        const reviews = this.props.reviewList.map((review) => {
            return (
                <ReviewElt review={review} tagList={this.props.tagList} />
            );
        }
        );
        return (
            <body>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="nav">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#"></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Profile</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#">Messages</a>
                                </li>
                                <li class="nav-item dropdown ml-md-auto">
                                    <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink"
                                        data-toggle="dropdown">Dropdown link</a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another
                                            action</a> <a class="dropdown-item" href="#">Something else here</a>
                                        <div class="dropdown-divider">
                                        </div> <a class="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </li>
                            </ul>
                            {reviews}
                        </div>
                    </div>
                </div>

                <script src="js/jquery.min.js"></script>
                <script src="js/bootstrap.min.js"></script>
                <script src="js/scripts.js"></script>
            </body>
        )
    }
}
export default ReviewMenu;


