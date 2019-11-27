import { string, number } from "prop-types";

export const userPropTypes = {
  name: string.isRequired,
  avatar: string,
  score: number.isRequired,
  id: string
};
