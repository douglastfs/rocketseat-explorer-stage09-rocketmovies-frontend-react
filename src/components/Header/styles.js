import styled from 'styled-components';

export const Container = styled.header`

  width: 100%;  
  grid-area: header;
  border-bottom: 1px solid #3E3B47; 
  
  > main {
  max-width: 136.6rem;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  padding: 2.4rem 12.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6.4rem;
  
  > h1 {
    color: #FF859B;
    font-size: 2.4rem;
  } 
}
`;

export const Profile = styled.div`
  display: flex;
  gap: .9rem;

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%
  }

  > div {
    display: flex;
    flex-direction: column;

    strong {
      color: #F4EDE8;
      font-size: 1.4rem;
      font-weight: 700;
      white-space: nowrap;
    }

    a, span {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      font-size: 1.4rem;
      align-self: end;
    }
  }
`;