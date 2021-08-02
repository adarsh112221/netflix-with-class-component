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
    };
  }
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
            });
          } else {
            this.setState({
              filmscollection: allContent,
              loading: false,
            });
          }
        })
        .catch((error) => {
          console.log(error.message);
        })
    );
  }
  render() {
    var show = false;
    const { filmscollection, loading, seriescollection } = this.state;
    const { user } = this.props;
    const films = filmscollection;
    const series = seriescollection;

    return (
      <Profile
        user={user}
        src={user.photoURL}
        loading={loading}
        name={user.displayName}
      />
    );
    if (show == true) {
      const slides = selectionFilter({ series, films });
      return <BrowseContainer slides={slides} />;
    }
  }
}
