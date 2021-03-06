import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { getData } from "../../ducks/userReducer";
import { connect } from "react-redux";
import swal from 'sweetalert';
import Nav from "../NavBar/Nav";

export class AddBookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book_title: "",
      book_desc: "",
      book_price: "",
      book_author_name: "",
      book_cover_img: ""
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  handleInputChange = (type, e) => {
    this.setState({
      [type]: e.target.value
    });
  };

  cancleBooks = (e) => {
    e.preventDefault()
    this.setState({
      book_title: "",
      book_desc: "",
      book_price: "",
      book_author_name: "",
      book_cover_img: ""
    })
    this.props.history.push("/account");
  }

  addBook = async (e) => {
    e.preventDefault()
    const {
      book_title,
      book_desc,
      book_price,
      book_author_name,
      book_cover_img
    } = this.state;
    await axios.post('/api/addbook', {
      book_title,
      book_desc,
      book_price,
      book_author_name,
      book_cover_img
    }).then(res => swal("Good job!", res.data.message, "success"));
    this.props.history.push("/books");
  };

  render() {
    return (
      <div>
        <Nav />
      <div className="component-holder">
        {this.props.admin ? <div> <h1 className="page-title">Add Book</h1>
        <Form>
          <Form.Group controlId="formBasicBookTitle">
            <Form.Label className="form-label">Book Title</Form.Label>
            <Form.Control
              required
              onChange={e => this.handleInputChange("book_title", e)}
              type="text"
              placeholder="Enter Title"
              value={this.state.book_title}
            />
          </Form.Group>

          <Form.Group controlId="formBasicDescription">
            <Form.Label className="form-label">Book Description</Form.Label>
            <Form.Control
              required
              onChange={e => this.handleInputChange("book_desc", e)}
              type="text"
              placeholder="Book Description"
              value={this.state.book_desc}
            />
          </Form.Group>

          <Form.Group controlId="formBasicBookPrice">
            <Form.Label className="form-label">Book Price</Form.Label>
            <Form.Control
              onChange={e => this.handleInputChange("book_price", e)}
              type="number"
              placeholder="Book Price"
              value={this.state.book_price}
            />
          </Form.Group>

          <Form.Group controlId="formBasicAuthorName">
            <Form.Label className="form-label">Author Name</Form.Label>
            <Form.Control
              required
              onChange={e => this.handleInputChange("book_author_name", e)}
              type="text"
              placeholder="Author Name"
              value={this.state.book_author_name}
            />
          </Form.Group>

          <Form.Group controlId="formBasicBookCoverImage">
            <Form.Label className="form-label">Book Cover Image</Form.Label>
            <Form.Control
              required
              onChange={e => this.handleInputChange("book_cover_img", e)}
              type="text"
              placeholder="Book Cover Image"
              value={this.state.book_cover_img}
            />
          </Form.Group>

          <div className="register-buttons">
              <Button onClick={(e) => this.cancleBooks(e)} variant="primary" type="submit">
                Cancel
              </Button>
            <Button onClick={(e) => this.addBook(e)} variant="primary" type="submit">
              Add Book
            </Button>
          </div>
        </Form> </div> : <div> <h2 className='admin-only'>Admins only on this page</h2> <Link to='/'>Back to Home Page</Link></div>}
      </div>
      </div>
    );
  }
}

const mapState = reduxState => reduxState.userReducer;

export default withRouter(connect(mapState, { getData })(AddBookForm));
