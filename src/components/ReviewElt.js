import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import moment from 'moment';

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

class ReviewElt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const review = this.props.review;
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
}
export default ReviewElt;