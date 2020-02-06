import React from "react";
import { connect } from "react-redux";

export const RedirectionInfo = props => {
  return (
    <div>
      <p>name: {props.redirection.name}</p>
    </div>
  );
};

export default connect(state => ({ redirection: state.redirection }))(
  RedirectionInfo
);
