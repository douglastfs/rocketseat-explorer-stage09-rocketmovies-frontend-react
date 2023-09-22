import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.2rem auto;
  grid-template-areas:
  "header"
  "add"
  "content";

  main {
    grid-area: content;
    max-width: 112.2rem;
    margin: 0 auto 5rem;
    overflow-y: auto;
    padding-right: .8rem;

    .films {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
    };
  }

  .addFilms {
    display: flex;
    align-items: center;
    max-width: 112.2rem;
    margin: 5rem auto 4rem;
    gap: 73rem;

    h2 {
      font-size: 3.2rem;
      font-weight: 400;
    }

    button {
        width: 20.7rem;
        margin: 0;
      }
    };
  
  
`;