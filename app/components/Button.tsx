import { styled, darkTheme } from "../../stitches.config";

export const Button = styled("button", {
  padding: "24px",
  color: "black",
  backgroundColor: "lightgrey",

  "&:hover": {
    background: "grey",
  },

  [`.${darkTheme} &`]: {
    color: "white",
    backgroundColor: "black",

    "&:hover": {
      background: "darkgrey",
    },
  },
});
