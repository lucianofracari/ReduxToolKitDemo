import React from "react";
import { connect } from "react-redux";
import { SetRedirection, ResetRedirection } from "../features/redirectionSlice";

export const RedirectionInfo = props => {
  return (
    <div>
      <p>Question: {props.question}</p>
      <button
        onClick={() => props.SetRedirection({ question: "is this chicken?" })}
      >
        Fetch Question
      </button>
      <br />
      <br />
      <button onClick={() => props.ResetRedirection()}>Reset</button>
    </div>
  );
};

export default connect(
  state => ({ question: state.redirection.question }),
  { SetRedirection, ResetRedirection }
)(RedirectionInfo);
