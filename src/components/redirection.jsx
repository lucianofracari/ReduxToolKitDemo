import React from "react";
import { connect } from "react-redux";
import { SetRedirection } from "../reducers/redirection";

export const RedirectionInfo = props => {
  return (
    <div>
      <p>Question: {props.redirection.question}</p>
      <button
        onClick={() => props.SetRedirection({ question: "is this chicken?" })}
      >
        Fetch Question
      </button>
    </div>
  );
};

export default connect(
  state => ({ redirection: state.redirection }),
  { SetRedirection }
)(RedirectionInfo);
