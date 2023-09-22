import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;
    background: rgba(255, 133, 155, 0.05);
    display: flex;
    align-items: center;
    padding: 0 14.4rem;

    svg {
      font-size: 1.6rem;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .8rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 0 auto;

  > div:nth-child(3){
    margin-bottom: 2.4rem;
  }


`;

export const Avatar = styled.div`
  position: relative;
  margin: -9.3rem auto 3.2rem;
  width: 18.6rem;
  height: 18.6rem;
  
  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: .7rem;
    bottom: .7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`;