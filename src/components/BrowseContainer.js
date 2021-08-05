import React, { Component } from "react";
import HeaderBrowse from "./HeaderBrowse";
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
    const{src,user}=this.props
    console.log(user)
    return <div>{loading ? <Loading src={src} /> :<HeaderBrowse user={user} src={src}/>}</div>;
  }
}

export default BrowseContainer;
