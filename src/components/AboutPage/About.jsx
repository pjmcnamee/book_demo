import React, { Component } from "react";
import InstagramEmbed from "react-instagram-embed";

export class About extends Component {
  render() {
    return (
      <div className="component-holder">
        <h1 className="page-title">About</h1>
        <div className="main-text-holder">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            laudantium, tenetur deserunt iusto esse autem corporis illo ad,
            velit nemo asperiores. Quam ipsa corrupti earum cupiditate sed
            atque? Officia, rerum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Rerum laudantium, tenetur deserunt iusto esse
            autem corporis illo ad, velit nemo asperiores. Quam ipsa corrupti
            earum cupiditate sed atque? Officia, rerum! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Rerum laudantium, tenetur
            deserunt iusto esse autem corporis illo ad, velit nemo asperiores.
            Quam ipsa corrupti earum cupiditate sed atque? Officia, rerum!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
            laudantium, tenetur deserunt iusto esse autem corporis illo ad,
            velit nemo asperiores. Quam ipsa corrupti earum cupiditate sed
            atque? Officia, rerum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Rerum laudantium, tenetur deserunt iusto esse
            autem corporis illo ad, velit nemo asperiores. Quam ipsa corrupti
            earum cupiditate sed atque? Officia, rerum! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Rerum laudantium, tenetur
            deserunt iusto esse autem corporis illo ad, velit nemo asperiores.
            Quam ipsa corrupti earum cupiditate sed atque? Officia, rerum!
          </p>
        </div>
        <div>
          <h3>
            Social Media
          </h3>
        </div>
        <div className="insta-holder">
          <InstagramEmbed
            url="https://www.instagram.com/p/BaN3d6LDqNA/"
            maxWidth={320}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>
    );
  }
}

export default About;
