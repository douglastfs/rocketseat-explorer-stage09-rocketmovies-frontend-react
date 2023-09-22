import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.2rem 13.2rem auto;
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
      text-wrap: nowrap;
    }
    };
  
  
`;

export const NewFilm = styled(Link)`
  width: 20.7rem;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: #312E38;

  height: 5.6rem;
  border: none;
  padding: 1.6rem;
  border-radius: 1rem;

  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: .8rem;
`;