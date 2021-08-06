import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showfeature: false,
      itemFeature: {},
    };
  }
  setshowfeature = (value) => {
    const { showfeature } = this.state;
    this.setState({
      showfeature: value,
    });
  };
  setitemfeature = (item) => {
    if (item !== null) {
      this.setState({
        itemFeature: item,
      });
    } else {
      return;
    }
  };
  render() {
    const { slideItem, category } = this.props;
    const { showfeature, itemFeature } = this.state;
    console.log(itemFeature);
    return (
      <div className="card-container">
        <p className="card-title">{slideItem.title}</p>
        <div className="card-entities">
          {slideItem.data.map((item) => (
            <div
              className="card-item"
              onClick={() => {
                this.setshowfeature(true);
                this.setitemfeature(item);
              }}
              key={item.docId}
            >
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
        {showfeature ? (
          <div
            className="card-feature"
            style={{
              backgroundImage: `url(/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg)`
            }}
          >
            <div className="card-content">
              <div className="card-feature-title">{itemFeature.title}</div>
              <p className="card-feature-text">{itemFeature.description}</p>
              <div
                className="card-feature-close"
                onClick={() => this.setshowfeature(false)}
              >
                {" "}
                <img src="/images/icons/close.png" alt="Close" />
              </div>
              <div className="card-feature-group">
                <div className="card-maturity">
                  {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
                </div>
                <p style={{ fontWeight: "bold" }} className="card-feature-text">
                  {itemFeature.genre.charAt(0).toUpperCase() +
                    itemFeature.genre.slice(1)}
                </p>
              </div>
              <div className="player-container">
                <button className="play-button">Play</button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Card;
