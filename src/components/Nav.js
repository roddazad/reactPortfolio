import React from 'react';

export default function Nav() {
    return(
      <div className="bar border">
          <nav>
            <li><a href="./">Home</a></li>
            <li><a href="./about">About Me</a></li>
            <li><a href="mailto:roddazad@gmail.com">Email Me </a></li>
            <li><a href="https://github.com/roddazad">My Github Page</a></li>
            <li>
              <a href="https://vanwykkim.github.io/movie-lookup/">Project 1</a>
            </li>
            <li><a href="https://plantparenthood.herokuapp.com/">Project 2</a></li>
            <li><a href="#">Project 3</a></li>
          </nav>
        </div>
    );
}