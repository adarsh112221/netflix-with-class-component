import React, { Component } from "react";
import Header from "./Header";
import Loading from "./Loading";
class BrowseContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
      setTimeout(() => {
          this.setState({
              loading:false
          })
      }, 2000);
  }
  
  render() {
    const { loading } = this.state;
    const{src}=this.props
    return <div>{loading ? <Loading src={src} /> :<Header/>}</div>;
  }
}

export default BrowseContainer;
