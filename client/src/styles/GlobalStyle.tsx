/** @jsx jsx */
import React from "react";
import { colors } from "./colors";
import { css, jsx, Global } from "@emotion/react";

export const GlobalStyle: React.FC = () => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap");

        * {
          box-sizing: border-box;
          font-family: "Noto Sans JP", sans-serif;
          -webkit-tap-highlight-color: transparent;
          margin: 0;
          padding: 0;
        }

        a {
          text-decoration: none;
          -webkit-tap-highlight-color: transparent;
          color: ${colors.fg};
        }

        ul {
          list-style: none;
        }

        body {
          color: ${colors.fg};
          background-color: ${colors.bg};
          min-height: 100vh;
          max-height: auto;
          overflow-x: hidden;
        }

        ::selection {
          background: ${colors.fg1};
          color: ${colors.bg1};
        }

        ::-webkit-scrollbar {
          width: 3px;
          height: 10px;
          background: ${colors.bg};
        }

        ::-webkit-scrollbar-track {
          background: ${colors.bg};
        }

        ::-webkit-scrollbar-thumb {
          background: ${colors.fg1};
          border-radius: 8px;
        }
      `}
    />
  );
};
