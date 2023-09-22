import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme}) => theme.COLORS.WHITE};

  border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.BACKGROUND_700}` : "none" };

  border-radius: 1rem;
  gap: 1.6rem;
  padding: 1.6rem;

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 1.6rem;
    
  }

  > input {
    width: 5rem;
    width: max-content;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }
`;