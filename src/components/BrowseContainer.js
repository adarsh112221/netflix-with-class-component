import React, { Component } from "react";
import HeaderBrowse from "./HeaderBrowse";
import Loading from "./Loading";
import Card from "./Card";
import Footer from "./footer";
import Fuse from "fuse.js";
class BrowseContainer extends Component {
  constructor(props) {
    super(props);
    const { slides } = this.props;

    this.state = {
      loading: true,
      category: "series",
      slideRows: slides['series'],
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1500);
  }
  changecategory = (clickedcat) => {
    if (this.state.category == "films"&&clickedcat=='series')
      this.setState({
        category: "series",
        slideRows:this.props.slides['series']
      });
    if (this.state.category == "series"&&clickedcat=='films')
    {  
      this.setState({
        category: "films",
        slideRows:this.props.slides['films']
      });
    }
  };
  FuseSearch = (searchTerm) => {
    const { slides } = this.props;
    const { slideRows, category } = this.state;
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length >= 1 && results.length > 0) {
      this.setSlideRows(results);
    } else {
      this.setSlideRows(slides[category]);
    }
  };
  setSlideRows = (abcd) => {
    this.setState({
      slideRows: abcd,
    });
  };
  render() {
    const { loading, category, slideRows } = this.state;
    const { src, user, slides } = this.props;
    return (
      <>
        {loading ? <Loading src={src} /> : null}
        <HeaderBrowse
          category={category}
          changecategory={this.changecategory}
          user={user}
          src={src} FuseSearch={this.FuseSearch}
        />
        <div className="card-group">
          {slideRows.map((slideItem) => (
            <Card
              category={category}
              slideItem={slideItem}
              key={`${category}-${slideItem.title.toLowerCase()}`}
            />
          ))}
        </div>
        <Footer />
      </>
    );
  }
}

export default BrowseContainer;
