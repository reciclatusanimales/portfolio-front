import styled from 'styled-components';

export const FooterContainer = styled.footer`
    padding: 2rem;
    background: #222;
    display: grid;
    place-items: center;

    p {
        font-size: 1.25rem;
    }
`;

export const FooterSocialIcons = styled.ul`
    margin-bottom: 2rem;
    margin-top: 2rem;    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;

    li {
        padding: 1rem;
    }
`;

export const FooterSocialIcon = styled.a`
    color: ${({ theme }) => theme.primary5};
    font-size: 1.5rem;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  
    &:hover {
        color: ${({ theme }) => theme.primary5};
    }
`;
