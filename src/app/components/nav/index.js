import React from "react";
import styled from "styled-components";
import { map } from "lodash/fp";
import { styles } from "../../misc/styles";
import { compose, withProps } from "recompose";
import {
  includeInMenu1,
  includeInMenu2,
  includeInMenu3
} from "../../state/nav/selector";

const ChildRouteContainer = styled.div`
  position: absolute;
  flex-direction: row;
  justify-content: center;
  top: ${styles.heights.menuBar};
  background: ${styles.colors.menuBar};
  left: 0;
  top: 100%;
  width: 100vw;
  padding: 0 20px;
  height: 420px;
`;

const ChildRouteColumnContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 20px 0;
  align-items: flex-start;
  max-width: 880px;
  margin: 0 auto;
`;

const ChildRoute = styled.div`
  a {
    padding: 8px;
    color: black;
    display: block;
    font-size: 12px;
    &:hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const ChildRouteColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-height: 100%;
  flex-grow: 1;
  position: relative;
  padding-left: 10px;
  &:after {
    content: "";
    height: 420px;
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    background: rgba(0, 0, 0, 0.1);
  }

  &:first-child:after {
    display: none;
  }
`;

const renderChildRoute = childRoutes =>
  map(childRoute =>
    childRoute.include_in_menu ? (
      <ChildRoute key={childRoute.id}>
        <a href={childRoute.url_path}>{childRoute.name}</a>
      </ChildRoute>
    ) : null
  )(childRoutes);

const ChildRoutes = ({ columnOne, columnTwo, columnThreee }) => (
  <ChildRouteContainer>
    <ChildRouteColumnContainer>
      <ChildRouteColumn>{renderChildRoute(columnOne)}</ChildRouteColumn>
      <ChildRouteColumn>{renderChildRoute(columnTwo)}</ChildRouteColumn>
      <ChildRouteColumn>{renderChildRoute(columnThreee)}</ChildRouteColumn>
    </ChildRouteColumnContainer>
  </ChildRouteContainer>
);

export default compose(
  withProps(({ childRoutes }) => ({
    columnOne: includeInMenu1(childRoutes),
    columnTwo: includeInMenu2(childRoutes),
    columnThree: includeInMenu3(childRoutes)
  }))
)(ChildRoutes);
