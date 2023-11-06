import styled from "styled-components";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <Div_Wrapper>
      <ErrorBoundary
        fallback={
          <Fallback>
            Ooops...Looks like we are having some issues to display this page.
            <br /> If you are developer check the console.
          </Fallback>
        }
      >
        <Outlet />
      </ErrorBoundary>
    </Div_Wrapper>
  );
}

const Div_Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Fallback = styled.p`
  color: white;
`;
