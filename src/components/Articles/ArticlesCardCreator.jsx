import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'

export class ArticlesCardCreator extends Component {
  render() {
	return (
	  <div>
		<Card  className="text-center">
              <Card.Header>Featured Articles</Card.Header>
              <Card.Body>
                <Card.Title>{this.props.article.article_title}</Card.Title>
                <Card.Text>
                  {this.props.article.article_teaser}
                </Card.Text>
                <Link to={{
                  pathname: '/articlesDiplay',
                  state: {
                    article: this.props.article
                  }
                }}>
                <Button variant="primary">Go somewhere</Button>
                </Link>
              </Card.Body>
              <Card.Footer className="text-muted">{this.props.article.article_posting_date}</Card.Footer>
            </Card>
	  </div>
	)
  }
}

export default ArticlesCardCreator
