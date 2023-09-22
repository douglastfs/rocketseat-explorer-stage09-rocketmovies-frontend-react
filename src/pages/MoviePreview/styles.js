import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.2rem auto;
  grid-template-areas:
  "header"
  "content";


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

    h1 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 3.6rem;
      font-weight: 500;
    }

    .movie-title-rate {
      display: flex;
      align-items: center;
      gap: 1.9rem;
      margin-bottom: 2.4rem;
    }

    .movie-title-rate div{
      display: flex;
      gap: 1rem;
      svg {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }

    .author-date {
      display: flex;
      gap: .8rem;
      align-items: center;
      margin-bottom: 4rem;

      img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 35px;
        border: 1px solid #3E3B47;
      };

      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    };

    .tags {
      margin-bottom: 4rem;
    }

    p {
      text-align: justify;
    }
  };
`;