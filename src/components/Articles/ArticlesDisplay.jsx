import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ArticlesDisplay extends Component {
	constructor(props){
		super(props)
		this.state = {
			article_image: '',
			article_text: '',
			article_title: ''
		}
	}

	componentDidMount(){
		if(!this.props.location.state){
			return
		}
		const {  article_image, article_text, article_title } = this.props.location.state.article
		this.setState({
			article_image: article_image,
			article_text: article_text,
			article_title: article_title
		})
	}


  render() {
		const {  article_image, article_text, article_title } = this.state
	return (
	  <div className="component-holder">
		{this.props.location.state ? <div> <h1 className="page-title">{article_title}</h1>
		<img className='article-image' src={article_image} alt="Article"/>
		<p>{article_text}</p> </div>: <div><Link to='/'>Go Back to Home Page and reselect Article you wish to view(refreshing page while on article breaks the page)</Link></div>}
	  </div>
	)
  }
}

export default ArticlesDisplay


// article_id: 3
// article_image: "https://i.kym-cdn.com/entries/icons/facebook/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.jpg"
// article_posting_date: "2019-04-23T06:00:00.000Z"
// article_teaser: "Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. "
// article_text: "Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. ↵↵Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. Cool text that makes you read more. "
// article_title: "Some Interesting title"