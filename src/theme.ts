import { CSSProp } from "styled-components";

declare module "react" {
  interface Attributes {
    css?: CSSProp<ITheme>;
  }
}

export interface ITheme {
  colors: {
    background: string;
    body: string;
    link: string;
    gradient: string;
    headline: string;
  };
}

export const theme: ITheme = {
  colors: {
    background: "#1B1B1B",
    body: "white",
    link: "#21FBB5",
    gradient: "linear-gradient(to left, #0FFEE5, #3BF66E)",
    headline: "#21FBB5"
  }
};
