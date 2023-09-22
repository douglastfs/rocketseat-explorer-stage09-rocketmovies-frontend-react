import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.2rem auto;
  grid-template-areas:
  "header"
  "content";

  .tags {
    display: flex;
    justify-content: space-between;
    gap: .5rem;
    flex-wrap: wrap;
    
  }

  .buttons {
    display: flex;
    gap: 4rem;
    margin-top: 4rem;
  }

  .excluir {
    width: 100%;
    background-color: #0D0C0F;;
    color: ${({ theme }) => theme.COLORS.PINK};
    height: 5.6rem;
    border: none;
    padding: 1.6rem;
    border-radius: 1rem;
    margin-top: 1.6rem;
    font-weight: 500;
  }
  
  > main {
    grid-area: content;
    width: 113.7rem;
    padding: 4rem 1.6rem 4rem 0;
    margin: 0 auto;
    overflow-y: auto;
    
    a {
      display: flex;
      align-items: center;
      gap: .8rem;
      color: ${({ theme}) => theme.COLORS.PINK};
      margin-bottom: 2.4rem;
    }

    h2 {
      font-size: 3.6rem;
      font-weight: 500;
      margin-bottom: 4rem;
    }

    div.titulo {
      display: flex;
      gap: 4rem;
      margin-bottom: 4rem;
    }

    textarea {
      margin-bottom: 4rem;
    }
  }
`;
