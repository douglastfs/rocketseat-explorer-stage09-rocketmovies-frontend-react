import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  border-radius: 1rem;
  padding: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`;