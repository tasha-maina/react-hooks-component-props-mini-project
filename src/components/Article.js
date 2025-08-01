import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  function getReadTime() {
    let emoji = minutes < 30 ? "☕️" : "🍱";
    let unit = minutes < 30 ? 5 : 10;
    let count = Math.ceil(minutes / unit);
    return emoji.repeat(count) + ` ${minutes} min read`;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{getReadTime()}</p>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
