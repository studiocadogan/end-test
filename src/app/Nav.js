import React from "react";
import styled from "styled-components";
import { map, isEmpty } from "lodash/fp";
import { styles } from "./misc/styles";
import ChildRoutes from "./components/nav";
import { compose, withState, withHandlers } from "recompose";

const RouteHeader = styled.div`
  padding: 8px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100%;
  padding: 0 15px;
  text-transform: uppercase;
  font-size: 13px;
`;

const RouteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: ${styles.colors.menuBar};
  height: ${styles.heights.menuBar};
  position: relative;
`;

const Nav = ({ navData, assignRoute, removeAssignedRoute, selectedRoute }) => (
  <RouteContainer onMouseLeave={() => removeAssignedRoute()}>
    {map(
      route =>
        route.include_in_menu && (
          <RouteHeader
            onMouseEnter={() =>
              route.children_data && assignRoute(route.children_data)
            }
            key={route.id}
          >
            <a href={route.url_path}>{route.name}</a>
          </RouteHeader>
        )
    )(navData)}
    {!isEmpty(selectedRoute) && <ChildRoutes childRoutes={selectedRoute} />}
  </RouteContainer>
);

const NavMenu = compose(
  withState("selectedRoute", "selectRoute", {}),
  withHandlers({
    assignRoute: ({ selectRoute }) => route => selectRoute(route),
    removeAssignedRoute: ({ selectRoute }) => () => selectRoute({})
  })
)(Nav);
export default NavMenu;
