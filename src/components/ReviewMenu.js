import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import './css/bootstrap-reboot.css'
import './css/bootstrap-reboot.min.css'
import './css/bootstrap.css'
import './css/bootstrap.min.css'
import './css/style.css'


function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

function QuiltedImageList(reviews) {
    return (
        <ImageList
            sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
        >
            {reviews.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

class ReviewMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //type: 'all',
            tags: [],
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
                <div class="row">
                    <div class="col-md-2">
                        <p>
                            {review.author}
                        </p>
                        <img alt="profile" src={review.avatar} class="rounded-circle" />
                        <p>
                            <a class="btn" href="#">View profile »</a>
                        </p>
                    </div>
                    <div class="col-md-8">
                        <h3>
                            {review.coffee_name}
                        </h3>
                        <p>
                            {review.comment}
                        </p>
                        <p>
                            <a class="btn" href="#">View details »</a>
                        </p>
                        <div align="center">
                            {QuiltedImageList(review.photos)}
                        </div>
                    </div>
                    <div class="col-md-2">
                        <p>
                            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
                            tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
                            malesuada magna mollis euismod. Donec sed odio dui.
                        </p>
                        <p>
                            <a class="btn" href="#">View details »</a>
                        </p>
                    </div>
                </div>
            )
        }
        );
        return (
            <body>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="nav">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Home</a>
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


