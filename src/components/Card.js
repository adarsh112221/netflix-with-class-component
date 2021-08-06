import React, { Component } from "react";

class Card extends Component {
  render() {
    const { slideItem, category } = this.props;
    return (
      <div className="card-container">
        <p className="card-title">{slideItem.title}</p>
        <div className="card-entities">
          {slideItem.data.map((item) => (
            <div className="card-item" key={item.docId}>
              <img
                src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
              />
              <div className="card-meta">
                <p className="card-subtitle">{item.title}</p>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Card;
