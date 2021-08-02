import selectionFilter from "../utils/selection-filter";
import React, { Component } from "react";
import BrowseContainer from "../components/BrowseContainer";
import { firebase } from "../lib/firebase.prod";
import Profile from "../components/profile";
export default class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: "series",
      films: "films",
      filmscollection: [],
      seirescollection: [],
      loading: true,
      show: false,
    };
  }
  setShow = () => {
    this.setState({
      show: true,
    });
  };
  componentDidMount() {
    console.log("aa");
    const items = ["series", "films"];
    items.map((item) =>
      firebase
        .firestore()
        .collection(item)
        .get()
        .then((snapshot) => {
          const allContent = snapshot.docs.map((contentObj) => ({
            ...contentObj.data(),
            docId: contentObj.id,
          }));

          if (item === "series") {
            this.setState({
              seriescollection: allContent,
              loading: false,
            });
          } else {
            this.setState({
              filmscollection: allContent,
            });
          }
        })
        .catch((error) => {
          console.log(error.message);
        })
    );
  }
  render() {
    const { filmscollection, loading, seriescollection, show } = this.state;
    const { user } = this.props;
    const films = filmscollection;
    const series = seriescollection;
    const slides = loading ? null : selectionFilter({ series, films });
    console.log(user);
    if (show == false) {
      return (
        <Profile
          setShow={this.setShow}
          user={user}
          src={user.photoURL}
          loading={loading}
          name={user.displayName}
        />
      );
    } else {
      console.log("browse");
      return <BrowseContainer slides={slides} src={user.photoURL} />;
    }
  }
}
