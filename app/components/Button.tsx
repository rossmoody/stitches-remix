import { styled, darkTheme } from "../../stitches.config";

// Unnecessarily passing darkTheme into styled component.
// If not, the darkTheme variables aren't compiled to root.

export const Button = styled("button", darkTheme, {
  padding: "24px",
  color: "$bgBody",
  backgroundColor: "$text",
});
