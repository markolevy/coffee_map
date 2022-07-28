import * as React from 'react';

class ReviewWriting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnClicked: false,
        };
    }

    render() {
        const btnClicked = this.state.btnClicked;
        if (!btnClicked) {
            return (
                <button class="btn btn-primary" onClick={() => this.setState({ btnClicked: true })}>
                    Edit
                </button>
            );
        }
        return (
            <form>
                <label>
                    Your Name:
                    <input
                        name="author"
                        type="text"
                        value={this.state.author} />
                </label>
                <br />
                <label>
                    Comment:
                    <input
                        name="comment"
                        type="text"
                        value={this.state.comment} />
                </label>
                <br />
                <label>
                    Coffee name:
                    <input
                        name="coffee_name"
                        type="text"
                        value={this.state.coffee_name} />
                </label>
                <br />

            </form>
        );
    }
}
export default ReviewWriting;