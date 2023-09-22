import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5.6rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

  
  display: flex;
  align-items: center;

  margin-bottom: .8rem;

  > input {
    width: 100%;
    padding: 1.6rem;
    background: transparent;
    border:none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }

  > svg {
    margin-left: 1.6rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

`;