import { each } from "async";
import React, { Component } from "react";
import { firebase } from "../lib/firebase.prod";
export default class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: "series",
      films: "films",
      filmscollection: [],
      seirescollection: [],
    };
  }
  componentDidMount() {
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
            });
          }
        })
        .catch((error) => {
          console.log(error.message);
        })
    );
  }
  render() {
    const { filmscollection,seriescollection} = this.state;
    const films=filmscollection;
    const series=seriescollection;
    return <div>hello this is browse page</div>;
  }
}
