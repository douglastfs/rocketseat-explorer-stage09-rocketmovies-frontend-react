import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: #312E38;

  height: 5.6rem;
  border: none;
  padding: 1.6rem;
  border-radius: 1rem;
  margin-top: 1.6rem;
  font-weight: 500;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: .8rem;


  &:disabled {
    opacity: 0.5;
  }
`;