import React from "react";
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";

import { LoadingContainer } from './style';
 
const override = css`
  display: flex;
  margin-bottom: 10px;
`;
 
class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
 
  render() {
    return (
      <LoadingContainer>
        <HashLoader
          css={override}
          size={50}
          color={"#29B573"}
          loading={this.state.loading}
        />
      </LoadingContainer>
    );
  }
}

export default Loading;