import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --Background: #0a0908;
    --white: #fff;
    --black: #000000;
    --light-gray: #dcdcdc;
    --link-color: #bdbdbd;
    --blue: #2c75fb;
    --light-blue: #5a94fc;
    --gold: #c9a96e;
    --light-gold: #d4b87a;
    --dark-gold: #a88c55;
    --cream: #f5e6cc;
    --green: #c9a96e;
    --emerald: #d4b87a;
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
    font-family: 'Josefin Sans', 'SF Pro Display', sans-serif;
    background-color: var(--Background);
    color: var(--white);

    &::-webkit-scrollbar {
      width: 0.5rem;
      border-radius: 0.5rem;
      &-thumb {
        background: var(--blue);
        border-radius: 0.5rem;
      }

      &-track {
        background: #1a1a1a;
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
