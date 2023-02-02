import React from "react";
import "./css-files/Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft"></div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
      </div>

      {newsArticle(
        "If u already made an account u dont need to click register",
        "just write the same pass and email n click sign in"
      )}
      {newsArticle(
        "You can use any email u dont have to use ur own ",
        "like for example look at mine"
      )}
      <div className="widgets__article">
        <div className="widgets__articleLeft"></div>

        <div className="widgets__articleRight">
          <h4>Check me out on github here!</h4>
          <a
            href="https://www.freecodecamp.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            :b
          </a>
        </div>
      </div>
      {newsArticle("Saleh is a goat!!!", "8000 readers")}
      {newsArticle("React v.17 is here!", " 123 readers")}
    </div>
  );
}

export default Widgets;
