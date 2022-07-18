import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import moment from 'moment';

import './css/bootstrap-reboot.css'
import './css/bootstrap-reboot.min.css'
import './css/bootstrap.css'
import './css/bootstrap.min.css'
import './css/style.css'

const { width, height } = Dimensions.get('window');

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
            sx={{ width: 290, height: 218 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
        >
            {reviews.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 2} rows={item.rows || 2}>
                    <img
                        {...srcset(item.img, 200, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

function Star(note, text) {
    var classElm = "col-md-2";
    var classColor = "reviewsText";
    if (text == "Global Rating") {
        classElm = "col-md-4";
        classColor = "globalReviewText";
    }
    var classes = [];
    for (var i = 0; i < note; i++) {
        classes.push("fa fa-star checked");
    }
    for (i = note; i < 5; i++) {
        classes.push("fa fa-star");
    }
    return (
        <div class={classElm}>
            <h2 class={classColor}>{text}</h2>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            {classes.map((item) => (
                <span class={item}></span>
            ))}
        </div>
    );
}

function returnTagInfos(tag, tagList, tagClass) {
    for (var i = 0; i < tagList.length; i++) {
        if (tagList[i].name == tag) {
            return (
                <div>
                    <span style={{ backgroundColor: tagList[i].color }}
                        class="tagText">
                        {tagList[i].name}
                    </span>
                </div >
            );
        }
    }
}

function Tags(review, tagList) {

    var weightsTags = [];
    const tagsList = review.tags;
    const length = tagsList.length;
    const newMax = (12 % length == 0) ? 12 : 12 - (12 % length);
    for (var i = 0; i < length; i++) {
        weightsTags.push("col-md-" + newMax / length);
    }

    for (i = 0; i < 12 % length; i++) {
        weightsTags[i] = "col-md-" + (newMax / length + 1);
    }
    const tags = weightsTags.map((tagClass, index) => (
        <div class={tagClass + " tag" + tagClass[7]}>
            {returnTagInfos(tagsList[index], tagList, tagClass)}
        </div>
    ));
    return (
        <div class="row tag">
            {tags}
        </div>
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
        console.log(width + " " + height);
        const reviews = this.props.reviewList.map((review) => {
            return (
                <div class="row border">
                    <div class="col-md-3">
                        <p>
                            Wrote {moment(review.date).fromNow()},
                        </p>
                        <p>
                            By {review.author}
                        </p>
                        <img alt="profile" src={review.avatar} class="rounded-circle" />
                        <p>
                            <a class="btn" href="#">Follow »</a>
                        </p>
                        <p>
                            <a class="btn" href="#">View profile »</a>
                        </p>

                    </div>
                    <div class="col-md-6">
                        <h3 class="titleText">
                            {review.coffee_name}
                        </h3>
                        <p>
                            {review.comment}
                        </p>
                        <p>
                            <a class="btn" href="#">View details »</a>
                        </p>
                        {Tags(review, this.props.tagList)}
                        <div class="row stars">
                            {Star(review.price_rating, "Prices", "color:blue")}
                            {Star(review.drink_rating, "Drinks", "color:blue")}
                            {Star(review.dessert_rating, "Desserts", "color:blue")}
                            {Star(review.mood_rating, "Mood", "color:blue")}
                            {Star(review.global_rating, "Global Rating", "color:blue")}
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="photoStyle">
                            {QuiltedImageList(review.photos)}
                        </div>
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
                                    <a class="nav-link active" href="#">{this.state.innerWidth}</a>
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


