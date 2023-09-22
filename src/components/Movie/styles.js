import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  border-radius: 1.6rem;
  background: rgba(255, 133, 155, 0.05);
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border: none;

  > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: #F4EDE8;
  }

  .rate {
    display: flex;
    gap: .6rem;
    margin: .8rem 0 1.5rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 1.2rem;
  }

  > p {
    overflow: hidden;
    text-align: justify;
    color: #999591; 
    
    /*Faz com que mostre apenas 2 linhas do paragrafo e reticências no final*/
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 2.4rem;

    span {
      background: #312E38;
    }
  }


`;