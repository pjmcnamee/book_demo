import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import axios from "axios";
import swal from 'sweetalert';
import { connect } from "react-redux";
import { getData } from "../../ducks/userReducer";

function BookCardCreator(props) {

 const componentDidMount = () =>{
    props.getData();
  }

  componentDidMount()

  const deleteBook = async (id) => {
    await axios.delete(`/api/books/${id}`).then(res => swal("Good job!", res.data.message, "success"))

    props.refreshBooks()
  }


  const popover = (
    <Popover id="popover-basic" title="Book Summary">
      {props.book.book_desc}
    </Popover>
  );

  const BookSummary = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button className='card-button' variant="success">Book Summary</Button>
    </OverlayTrigger>
  );

  return (
    <div className="book-card" key={props.book.book_id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img  style={{width: 285, height: 400}} variant="top" src={props.book.book_cover_img} />
        <Card.Body>
          <Card.Title>{props.book.book_title}</Card.Title>
          <Card.Text className="card-text">
            <span className="card-title">Author: </span>
            {props.book.book_author_name}

            <span className="card-title">Book Price: </span>
            {`$${props.book.book_price}`}
          </Card.Text>
          <BookSummary />
          {props.admin ? <Button onClick={() => deleteBook(props.book.book_id)} variant="danger">Delete Book</Button> : null}
        </Card.Body>
      </Card>
    </div>
  );
}

const mapState = reduxState => reduxState.userReducer;

export default connect(mapState, { getData })(BookCardCreator)
