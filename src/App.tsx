import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";

import bgImage from "./assets/bg.png";
import Spinner from "./Spinner";

const Normalize = css`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.main`
  height: 500vh;
  background: #1c1e23;
  background-image: url('${bgImage}');
  background-size: cover;
  background-attachment: fixed;
`;

export default function App() {
  return (
    <Wrapper>
      <Global styles={Normalize} />
      <Spinner />
    </Wrapper>
  );
}
