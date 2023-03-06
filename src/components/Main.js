import React from 'react';
import myImage from '../images/me.jpg'

export default function Main() {
    return (
        <div class="container">
        <div class="img-box border">
          <div>
            <img src={myImage} alt="A man with a cowboy hat" />
          </div>
          <div>
            <h2>Hi everyone, my name is Rodd Azad!</h2>
            <p>I've been enjoying Fullstack web Development courses so far.</p>
            <p>
              Here is where I will share with you my projects from bootcamp.
            </p>
          </div>
        </div>

        <div class="box border project1">
          <a href="https://vanwykkim.github.io/movie-lookup/"><p>PROJECT 1</p></a>
        </div>
        <div class="box border project2">
          <a href="https://plantparenthood.herokuapp.com/"><p>PROJECT 2</p></a>
        </div>
        <div class="box border project3">
          <a href="#"><p>PROJECT 3</p></a>
        </div>
      </div>
    );
}