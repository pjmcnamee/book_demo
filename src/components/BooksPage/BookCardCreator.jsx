import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export default function BookCardCreator(props) {
  const popover = (
    <Popover id="popover-basic" title="Book Summary">
      {props.book.book_desc}
    </Popover>
  );

  const BookSummary = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success">Book Summary</Button>
    </OverlayTrigger>
  );

  return (
    <div className="book-card" key={props.book.book_id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img  style={{width: 285, height: 400}} variant="top" src={props.book.book_cover_img} />
        <Card.Body>
          <Card.Title>{props.book.book_title}</Card.Title>
          <Card.Text className="card-text">
            <span className="card-span">Author: </span>
            {props.book.book_author_name}

            <span className="card-span">Book Price: </span>
            {`$${props.book.book_price}`}
          </Card.Text>
          <BookSummary />
        </Card.Body>
      </Card>
    </div>
  );
}