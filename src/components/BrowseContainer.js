import React, { Component } from "react";
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
    return <div>{loading ? <Loading src={src} /> : null}</div>;
  }
}

export default BrowseContainer;
