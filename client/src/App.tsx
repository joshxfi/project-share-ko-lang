/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/react';
import { colors } from './Styles';

const App: React.FC = () => {
  return (
    <div
      css={css`
        margin: 0;
        padding: 0;
      `}
    >
      <h1>Hello World!</h1>

      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Yomogi&display=swap');

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            background: ${colors.bg};
            color: ${colors.fg};
            font-family: 'Yomogi', cursive;
          }
        `}
      />
    </div>
  );
};

export default App;
