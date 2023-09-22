import styled from 'styled-components';
import BackgroundImg from '../../assets/Background.png';

export const Container = styled.div`
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 13.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
        font-size: 1.4rem;
        color: ##CAC4CF;
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 500;
        margin: 4.8rem 0;
    }

    > a {
        font-size: 1.6rem;
        text-align: center;
        margin-top: 4.2rem;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundImg}) no-repeat center center;
    background-size: cover;
    opacity: 0.5;
`;