import { pathOr } from "ramda";

export const HOME = "Home";
export const LEADER_BOARD = "Leader Board";
export const GAME = "Game";
export const CDISCOUNT = "Cdiscount";

export const getRouteNameFromNavigation = pathOr("", ["state", "routeName"]);
