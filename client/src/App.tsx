/** @jsx jsx */
import React from 'react';
import { css, jsx, Global } from '@emotion/react';
import { colors } from './Styles';
import { Navbar } from './components/Navbar';
import { Input } from './components/Input';

const App: React.FC = () => {
  return (
    <div
      css={css`
        margin: 0;
        padding: 0;
        width: 80%;
        height: 100vh;
        margin: 0 auto;
        text-align: center;
      `}
    >
      <Navbar />
      <h1>Share A Thought! 💡</h1>
      <Input />

      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');

          * {
            box-sizing: border-box;
            font-family: 'Noto Sans JP', sans-serif;
            margin: 0;
            padding: 0;
          }

          body {
            background: ${colors.bg};
            color: ${colors.fg};
          }

          ::-webkit-scrollbar {
            width: 5px;
            height: 10px;
            background: #f9f9f9;
          }

          ::-webkit-scrollbar-track {
            background: #f9f9f9;
          }

          ::-webkit-scrollbar-thumb {
            background: ${colors.fg};
            border-radius: 8px;
          }
        `}
      />
    </div>
  );
};

export default App;
