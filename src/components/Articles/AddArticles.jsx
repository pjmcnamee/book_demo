import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getData } from "../../ducks/userReducer";
import swal from 'sweetalert';
import Nav from "../NavBar/Nav";

export class AddArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleImg: "",
      articleTitle: "",
      articleText: "",
      articleTeaser: ""
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

  addArticles = async () => {
    const { articleImg, articleTitle, articleText, articleTeaser } = this.state;

    await axios.post("/api/addArticles", {
      articleImg,
      articleTitle,
      articleText,
      articleTeaser
    }).then(res => swal("Good job!", res.data.message, "success"));

    this.props.history.push("/account");
  };

  render() {
    return (
      <div>
        <Nav />
      <div className="component-holder">
      <div><h1>Add Articles</h1></div>
        {this.props.admin ? <div> <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Articles Image</Form.Label>
            <Form.Control
              onChange={e => this.handleInputChange("articleImg", e)}
              type="text"
              placeholder="http://imgurl.com"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Articles Title</Form.Label>
            <Form.Control
              onChange={e => this.handleInputChange("articleTitle", e)}
              type="text"
              placeholder="Articles Title"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Articles Text</Form.Label>
            <Form.Control
              onChange={e => this.handleInputChange("articleText", e)}
              as="textarea"
              rows="3"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Articles Teaser</Form.Label>
            <Form.Control
              onChange={e => this.handleInputChange("articleTeaser", e)}
              as="textarea"
              rows="3"
            />
            <Form.Text className="text-muted">
              Make this a sentance or two to draw the user into reading the
              artical
            </Form.Text>
          </Form.Group>
        </Form>
        <div>
          <Link to="/account">
            <Button variant="primary" type="submit">
              Cancel
            </Button>
          </Link>
          <Button
            onClick={e => this.addArticles()}
            variant="primary"
            type="submit"
          >
            Add Articles
          </Button>
        </div></div> : <div> <h2 className='admin-only'>Admins only on this page</h2> <Link to='/'>Back to Home Page</Link></div>}
      </div>
      </div>
    );
  }
}

const mapState = reduxState => reduxState.userReducer;

export default withRouter(connect(mapState, { getData })(AddArticles));
