import React, { Component } from "react";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";
import axios from "axios";
import ArticlesCardCreator from "../Articles/ArticlesCardCreator";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount(){
    axios
      .get("/api/articles")
      .then(res => {
        console.log(res.data)
        this.setState({articles: res.data})
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="component-holder">
        <h1 className="page-title">Home</h1>
          <h2>WORK ON DELETE BOOK AND NEWSLETTER EMAIL CHECK</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            non at cumque similique quam obcaecati qui ratione voluptatum nisi
            saepe consequatur, aperiam ab ipsam sunt nobis harum odit blanditiis
            quia.
          </p>
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
            return <ArticlesCardCreator article={article}/>
          })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
