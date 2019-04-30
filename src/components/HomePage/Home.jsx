import React, { Component } from "react";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";
import ArticlesCardCreator from "../Articles/ArticlesCardCreator";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Image from "../Image/Image";
import { Parallax } from "react-scroll-parallax";
import Nav from "../NavBar/Nav";
import axios from "axios";
import { connect } from "react-redux";
import { getOneBook } from "../../ducks/booksReducer";
import BookCardCreator from "../BooksPage/BookCardCreator";

//Garden
import Sky from "../../Garden/13-ceu.png";
import Sun from "../../Garden/12-sol.png";
import Mountains from "../../Garden/10-montes.png";
import MoreMountainParts from "../../Garden/8-montes.png";
import TreeParts from "../../Garden/7-montes.png";
import FarTrees from "../../Garden/6-arvores.png";
import CloseTrees from "../../Garden/5-arvores.png";
import Lake from "../../Garden/4-lago.png";
import Rock from "../../Garden/3-pedra.png";
import RightBigTree from "../../Garden/2-arvore-dir.png";
import LeftBigTree from "../../Garden/1-arvore-esq.png";
import Footer from "../Footer/Footer";

//Soil

import PinkSoil from '../../Soil/2-chao.png'
import PurpleSoil from '../../Soil/1-chao.png'

//Cave

import PinkCaveRoof from '../../Cave/1-teto.png'
import PurpleCaveRoof from '../../Cave/camada2-teto.png'
import PurpleCaveRoofAndTrees from '../../Cave/camada3-teto-arvores.png'
import PurpleCaveClose from '../../Cave/camada4-teto-arvores.png'
import DarkPurpleTrees from '../../Cave/camada5-arvores.png'
import PinkTrees from '../../Cave/camada6-arvores.png'
import Rays from '../../Cave/camada8-atmosfera.png'
import YellowRay from '../../Cave/cascata-brilho.png'
import BottomCave from '../../Cave/fundo.png'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  async componentDidMount() {
    await axios
      .get("/api/articles")
      .then(res => {
        this.setState({ articles: res.data });
      })
      .catch(err => console.log(err));
    await this.props.getOneBook();
  }

  refreshBooks = () => {
    this.props.getAllBooks();
  }

  //Garden

  ParallaxSky = () => (
    <Parallax className="sky-broken" y={[0, 0]} tagOuter="figure">
      <Image style={{ Width: "100%" }} src={Sky} />
    </Parallax>
  );

  ParallaxRightTree = () => (
    <Parallax className="right-tree" y={[0, 0]} tagOuter="figure">
      <Image style={{}} src={RightBigTree} />
    </Parallax>
  );

  ParallaxLeftTree = () => (
    <Parallax className="left-tree" y={[0, 0]} tagOuter="figure">
      <Image style={{}} src={LeftBigTree} />
    </Parallax>
  );

  ParallaxLake = () => (
    <Parallax className="lake" y={[0, 0]} tagOuter="figure">
      <Image style={{}} src={Lake} />
    </Parallax>
  );

  ParallaxMountains = () => (
    <Parallax className="mountains" y={[0, 0]} tagOuter="figure">
      <Image style={{}} src={Mountains} />
    </Parallax>
  );

  ParallaxMoreMountainParts = () => (
    <Parallax className="more-mountain-parts" y={[0, 0]} tagOuter="figure">
      <Image style={{}} src={MoreMountainParts} />
    </Parallax>
  );

  ParallaxTreeParts = () => (
    <Parallax className="tree-parts" y={[0, 0]} tagOuter="figure">
      <Image style={{}} src={TreeParts} />
    </Parallax>
  );

  ParallaxFarTrees = () => (
    <Parallax className="far-trees" y={[0, 0]} tagOuter="figure">
      <Image style={{}} src={FarTrees} />
    </Parallax>
  );

  ParallaxCloseTrees = () => (
    <Parallax className="close-trees" y={[0, 0]} tagOuter="figure">
      <Image style={{}} src={CloseTrees} />
    </Parallax>
  );

  ParallaxRock = () => (
    <Parallax className="rock" y={[0, 0]} tagOuter="figure">
      <Image style={{}} src={Rock} />
    </Parallax>
  );

  ParallaxSun = () => (
    <Parallax className="sun" y={[0, 0]} tagOuter="figure">
      <Image style={{}} src={Sun} />
    </Parallax>
  );

  //Soil Transition

  ParallaxPinkSoil = () => (
    <Parallax className="pink-soil" y={[0, 0]} tagOuter="figure">
      <Image style={{ Width: "100%" }} src={PinkSoil} />
    </Parallax>
  );
  
  ParallaxPurpleSoil = () => (
    <Parallax className="purple-soil" y={[0, 0]} tagOuter="figure">
      <Image style={{ Width: "100%" }} src={PurpleSoil} />
    </Parallax>
  );


  //CAVE

  ParallaxPinkCaveRoof = () => (
    <Parallax className="pink-cave-roof" y={[0, 0]} tagOuter="figure">
      <Image style={{ Width: "100%" }} src={PinkCaveRoof} />
    </Parallax>
  );
  
  ParallaxPurpleCaveRoof = () => (
    <Parallax className="purple-cave-roof" y={[0, 0]} tagOuter="figure">
      <Image style={{ Width: "100%" }} src={PurpleCaveRoof} />
    </Parallax>
  );
  
  ParallaxPurpleCaveRoofAndTrees = () => (
    <Parallax className="purple-cave-roof-trees" y={[0, 0]} tagOuter="figure">
      <Image style={{ Width: "100%" }} src={PurpleCaveRoofAndTrees} />
    </Parallax>
  );
  
  ParallaxPurpleCaveClose= () => (
    <Parallax className="purple-cave-close" y={[0, 0]} tagOuter="figure">
      <Image style={{ Width: "100%" }} src={PurpleCaveClose} />
    </Parallax>
  );
  
  ParallaxDarkPurpleTrees = () => (
    <Parallax className="dark-purple-trees" y={[0, 0]} tagOuter="figure">
      <Image style={{ Width: "100%" }} src={DarkPurpleTrees} />
    </Parallax>
  );
  
  ParallaxPinkTrees= () => (
    <Parallax className="pink-trees" y={[0, 0]} tagOuter="figure">
      <Image style={{ Width: "100%" }} src={PinkTrees} />
    </Parallax>
  );
  
  ParallaxRays = () => (
    <Parallax className="rays" y={[0, 0]} tagOuter="figure">
      <Image style={{ Width: "100%" }} src={Rays} />
    </Parallax>
  );
  
  ParallaxYellowRay  = () => (
    <Parallax className="yellow-ray" y={[0, 0]} tagOuter="figure">
      <Image style={{ Width: "100%" }} src={YellowRay } />
    </Parallax>
  );
  
  ParallaxBottomCave = () => (
    <Parallax className="bottom-cave" y={[0, 0]} tagOuter="figure">
      <Image style={{ Width: "100%" }} src={BottomCave} />
    </Parallax>
  );

  render() {
    return (
      <div className="home">
        <div className="temp">
          <div>
            {this.ParallaxSky()}
            {this.ParallaxRightTree()}
            {this.ParallaxLeftTree()}
            {this.ParallaxMountains()}
            {this.ParallaxTreeParts()}
            {this.ParallaxMoreMountainParts()}
            {this.ParallaxFarTrees()}
            {this.ParallaxCloseTrees()}
            {this.ParallaxLake()}
            {this.ParallaxRock()}
            {this.ParallaxSun()}
          </div>
          <div />
        </div>
        <Nav />
        <div className="news-letter-home-page">
          <div className="news-home-border">
            <h2 className="news-title">Newsletter</h2>
            <p>
              Subscribe to newsletter to recieve updates about upcoming books
              and releases
            </p>
            <Link to="/newsletter">
              <Button className="news-letter-button" variant="secondary">
                To Newsletter
              </Button>
            </Link>
          </div>
        </div>
        <div className="home-content">
          <div className="articles-holder">
            <h2 className="news-title articles-title">Featured Articles</h2>
            {this.state.articles.map(article => {
              return (
                <ArticlesCardCreator
                  key={article.article_id}
                  article={article}
                />
              );
            })}
          </div>
          <div className="home-space-maker" />
          <div className='another-temp'>
            {this.ParallaxPurpleSoil()}
            {this.ParallaxPinkSoil()}
        </div>
        </div>
        <div className="book-home-holder">
          <h2 className="off-color-title">Featured Book</h2>
          <BookCardCreator
            key={this.props.book.book_id}
            book={this.props.book}
            refreshBooks={this.refreshBooks}
          />
        </div>

        <div className='bottom-temp'>
            {this.ParallaxPinkCaveRoof()}
            {this.ParallaxPurpleCaveRoof()}
            {this.ParallaxPurpleCaveRoofAndTrees()}
            {this.ParallaxPurpleCaveClose()}
            {this.ParallaxDarkPurpleTrees()}
            {this.ParallaxPinkTrees()}
            {this.ParallaxRays()}
            {/* {this.ParallaxYellowRay()} */}
            {this.ParallaxBottomCave()}
        <div>

        </div>

        </div>
        <Footer />
      </div>
    );
  }
}

const mapState = reduxState => reduxState.booksReducer;

export default connect(
  mapState,
  { getOneBook }
)(Home);
