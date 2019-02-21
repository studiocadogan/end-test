import { filter, flow, orderBy } from "lodash/fp";

export const includeInMenu1 = flow(
  filter(
    route =>
      route.include_in_menu &&
      !route.include_in_menu_column2 &&
      !route.include_in_menu_column2
  ),
  orderBy("is_column_header", "asc")
);

export const includeInMenu2 = flow(
  filter(route => route.include_in_menu_column2),
  orderBy("is_column_header", "desc")
  //I have no idea why these descend
);

export const includeInMenu3 = flow(
  filter(route => route.include_in_menu_column3),
  orderBy("is_column_header", "desc")
);
