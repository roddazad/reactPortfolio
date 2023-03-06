import React from 'react';
import Nav from "./Nav";

export default function Header() {
    return (
        <div>
        <div className="header border"><h1>Welcome to My Portfolio</h1></div>
        <div className="bar border">
        <Nav />
        </div>
      </div>
    );
}