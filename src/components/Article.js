import React from "react";

function Article({id, title, date, preview, minutes}) {

    const generateReadingTime = (minutes) => {
        if (minutes < 30) {
          const cups = Math.ceil(minutes / 5);
          return "☕️".repeat(cups) + ` ${minutes} min read`;
        } else {
          const boxes = Math.ceil(minutes / 10);
          return "🍱".repeat(boxes) + ` ${minutes} min read`;
        }
    };

    const readingTime = generateReadingTime(minutes)

    return <article key={id}>
        <h3>{title}</h3>
        <small>{date || "January 1, 1970"} . {readingTime}</small>
        <p>{preview}</p>
    </article>

}

export default Article