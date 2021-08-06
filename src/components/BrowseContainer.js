import React, { Component } from "react";
import HeaderBrowse from "./HeaderBrowse";
import Loading from "./Loading";
import Card from "./Card";
class BrowseContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      category:'series'
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1500);
  }
  changecategory=()=>{
    if(this.state.category=='films')
    this.setState({
      category:'series'
    })
    if(this.state.category=='series')
    this.setState({
      category:'films'
    })
  }

  render() {
    const { loading,category } = this.state;
    const { src, user, slides } = this.props;
    console.log(user);
    return (
      <div>
        {loading ? <Loading src={src} /> : null}
        <HeaderBrowse category={category} changecategory={this.changecategory} user={user} src={src} />
        <div className='card-group'>
        {slides[category].map((slideItem) => (
          <Card category={category}
            slideItem={slideItem}
            key={`${category}-${slideItem.title.toLowerCase()}`}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default BrowseContainer;
