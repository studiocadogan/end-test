import { filter } from "lodash/fp";

export const includeInMenu1 = filter(
  route =>
    route.include_in_menu &&
    !route.include_in_menu_column2 &&
    !route.include_in_menu_column2
);

export const includeInMenu2 = filter(route => route.include_in_menu_column2);

export const includeInMenu3 = filter(route => route.include_in_menu_column3);
