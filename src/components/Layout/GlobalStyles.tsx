import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --Background: #ffffff;
    --white: #fff;
    --black: #000000;
    --light-gray: #666666;
    --link-color: #333333;
    --green: #0066cc;
    --emerald: #3399ff;
    --blue: #0066cc;
    --light-blue: #3399ff;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'SF Pro Display', sans-serif;
    background-color: var(--Background);
    color: var(--black);

    &::-webkit-scrollbar {
      width: 0.5rem;
      border-radius: 0.5rem;
      &-thumb {
        background: var(--blue);
        border-radius: 0.5rem;
      }

      &-track {
        background: #f0f0f0;
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .parallax {
    overflow: hidden;
    margin: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .parallax .scroller {
    display: flex;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
  }

  .scroller span {
    display: block;
    margin-right: 5rem;
  }

  .not_complete {
    display: none;
  }

  .complete {
  }
`;
