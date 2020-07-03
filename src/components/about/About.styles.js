import styled from 'styled-components';
import Image from "gatsby-image"

export const AboutCenter = styled.div`
    display: grid;
    gap: 3rem 2rem;

    @media screen and (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const AboutImg = styled.article`
    @media screen and (min-width: 992px) {
        display: block;
        position: relative;
        max-width: 25rem;
        max-height: 30rem;

        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border: 0.25rem solid ${({ theme }) => theme.primary5};
            top: 2rem;
            right: -2rem;
            border-radius: var(--radius);
        }
    }
`;

export const AboutPhoto = styled(Image)`
    max-width: 25rem;
    max-height: 30rem;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: var(--radius);
    /* place the image in front of ::before */
    position: relative;
`;

export const AboutInfo = styled.article`
    @media screen and (min-width: 992px) {
        align-self: center;
    }
`;

export const AboutTitle = styled.div`
    text-align: left !important;
    margin-bottom: 2rem;

    .underline {
        margin-left: 0;
    }
`;
  