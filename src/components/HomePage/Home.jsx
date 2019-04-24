import React, { Component } from "react";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";
import axios from "axios";
import ArticlesCardCreator from "../Articles/ArticlesCardCreator";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/articles")
      .then(res => {
        this.setState({ articles: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="component-holder">
        {/* <h1 className="page-title">Home</h1> */}
        {/* <div className="main-text-holder"> */}
          {/* <p className="main-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            non at cumque similique quam obcaecati qui ratione voluptatum nisi
            saepe consequatur, aperiam ab ipsam sunt nobis harum odit blanditiis
            quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            non at cumque similique quam obcaecati qui ratione voluptatum nisi
            saepe consequatur, aperiam ab ipsam sunt nobis harum odit blanditiis
            quia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            non at cumque similique quam obcaecati qui ratione voluptatum nisi
            saepe consequatur, aperiam ab ipsam sunt nobis harum odit blanditiis
            quia.
          </p>
        </div> */}

        <div className="news-letter-home-page">
        <div className='news-home-border'>
          <h2 className='news-title'>Newsletter</h2>
          <p>Subscribe to newsletter to recieve updates about upcoming books and releases</p>
          <Link to="/newsletter">
            <Button variant="secondary">To Newsletter</Button>
          </Link>
        </div>
        </div>

        <div className="home-holder">
          <div className="twitter-holder">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="saurabhnemade"
              options={{ height: 525 }}
            />
            <TwitterFollowButton screenName={"saurabhnemade"} />
          </div>

          <div className="artical-holder">
            {this.state.articles.map(article => {
              return (
                <ArticlesCardCreator
                  key={article.article_id}
                  article={article}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
