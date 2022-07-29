import * as React from 'react';
import axios from 'axios';

import { myFunction } from './js/scripts.js';

import {
    getAllUsers,
    getUsersById,
    getUsersByUsername,
    postUser,
    putUser,
    deleteAllUsers,
    deleteUserById,
    clearGetOutput,
    clearPostOutput,
    clearPutOutput,
    clearDeleteOutput
} from './js/main.js';

import './css/bootstrap-reboot.css'
import './css/bootstrap-reboot.min.css'
import './css/bootstrap.css'
import './css/bootstrap.min.css'
import './css/style.css'

import ReviewElt from './ReviewElt';
import ReviewWriting from './reviewWriting';


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
                                        User-toggle="dropdown">Dropdown link</a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#">Action</a> <a class="dropdown-item" href="#">Another
                                            action</a> <a class="dropdown-item" href="#">Something else here</a>
                                        <div class="dropdown-divider">
                                        </div> <a class="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </li>
                            </ul>
                            <button onclick="getAllUsers()">Get All</button>
                            <input type="text" id="post-username" placeholder="username"></input>
                            <input type="text" id="post-email" placeholder="email"></input>
                            <input type="text" id="post-password" placeholder="password"></input>
                            <button onClick={() => postUser()}>Post User</button>
                            <button onClick={() => getAllUsers()}>Get all users</button>
                            <p id="getResult"></p>
                            <ReviewWriting />
                            {reviews}
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}
export default ReviewMenu;


