import React, { Component } from "react";
import { connect } from "react-redux";
import { showbody } from "../actions/acordian";
class AccordianItem extends Component {
  // constructor(props) {
  //   super(props);
  // }
  handleOnClick = () => {
    const { value } = this.props;
    this.props.dispatch(showbody(!value,this.props.item.id));
  };
  render() {
    const { item, value,id} = this.props;
    console.log("value", value);
    return (
      <div onClick={this.handleOnClick} className="accordian-item">
        <div className="accordian-header">
          {item.header}
          {value ? (
            <img src="/images/icons/close-slim.png" alt="open" />
          ) : (
            <img src="/images/icons/add.png" alt="close" />
          )}
        </div>
        {value&&(id==item.id)? <div className="accordian-body">{item.body}</div> : null}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    value: state.val,
    id:state.id
  };
}
export default connect(mapStateToProps)(AccordianItem);
