import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ArticlesCardCreator extends Component {
  render() {
    return (
      <div className="real-article-holder">
        <h3>{this.props.article.article_title}</h3>

        <div className="inner-article-preview">
          <img
            className="article-image"
            src={this.props.article.article_image}
            alt=""
          />

          <p className="article-teaser">{this.props.article.article_teaser}</p>
          <Link to={{
            pathname:'/articlesDiplay',
            state:{
              article: this.props.article
            }
          }}>Read More</Link>
        </div>
      </div>
    );
  }
}

export default ArticlesCardCreator;
