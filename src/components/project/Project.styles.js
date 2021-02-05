import styled from 'styled-components';
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from 'gatsby'

export const ProjectImg = styled.img`
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 19rem;
    z-index: 1;
    opacity: 0.3;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom right, red, #222);
        opacity: 0.85;
        transition: var(--transition);
        z-index:10;
    }

    @media screen and (min-width: 576px) {
        height: 19rem;
    }

    @media screen and (min-width: 768px) {
        grid-column: 2 / span 8;
        grid-row: 1 / span 1;
        height: 22rem;
        border-top-left-radius: var(--radius);
        border-top-right-radius: var(--radius);
        box-shadow: var(--dark-shadow);
    }
    @media screen and (min-width: 992px) {
        grid-column: 2 / span 8;
        grid-row: 1 / span 1;
        height: 30rem;
        border-radius: var(--radius);
        box-shadow: var(--dark-shadow);
    }
`;

export const ProjectInfo = styled.div`
    background: var(--clr-white);
    opacity: 0.8;
    padding: 1rem 2rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);

    h3 {
        font-weight: 500;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
    }

    @media screen and (min-width: 768px) {
        border-bottom-left-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
        box-shadow: var(--dark-shadow);

        z-index: 1;
        grid-column: 2 / span 8;
        grid-row: 2 / span 2;
    }
    
    @media screen and (min-width: 992px) {
        border-radius: var(--radius);
        box-shadow: var(--dark-shadow);

        z-index: 1;
        grid-column: 5 / 12;
        grid-row: 1 / span 1;
    }
    color: var(--primary);
`;

export const ProjectContainer = styled.div`
    display: grid;
    margin-bottom: 4rem;
    padding: 0 20px;
    cursor: pointer;

    &:hover ${ProjectImg} {
        opacity: 1;
    }
    &:hover ${ProjectInfo} {
        opacity: 1;
    }

    &:nth-of-type(even) ${ProjectInfo} {
        text-align: right;
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(12, 1fr);
        align-items: center;
        
        &:nth-of-type(even) ${ProjectImg} {
            grid-column: 4 / 12;
            grid-row: 1 / 1;
        }
        
        &:nth-of-type(even) ${ProjectInfo} {
            grid-column: 4 / 12;
            grid-row: 2 / 2;
            text-align: left;
        }
    }

    @media screen and (min-width: 992px) {
        grid-template-columns: repeat(12, 1fr);
        align-items: center;

        &:nth-of-type(even) ${ProjectImg} {
            grid-column: 5 / 12;
            grid-row: 1 / 1;
        }
        
        &:nth-of-type(even) ${ProjectInfo} {
            grid-column: 2 / span 6;
            grid-row: 1 / span 1;
            text-align: left;
        }
    }
`;

export const ProjectTitle = styled(Link)`
    
`;

export const ProjectNumber = styled.span`
    display: inline-block;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.primary5};
    margin-bottom: 0.75rem;
`;

export const ProjectDescription = styled.p`
    word-spacing: 15px;
    color: ${({ theme }) => theme.grey3};
`;

export const StackImg = styled.img`
    height: 50px !important;
    width: auto !important;
`;

export const ProjectStack = styled.div`
    margin-bottom: 1rem;

    ${StackImg} {
        display: inline-block;
        padding: 0.25rem 0.3rem;
    }
`;

export const ProjectGithub = styled(FaGithubSquare)`
    color: ${({ theme }) => theme.primary5};
    font-size: 1.25rem;
    margin-right: 0.5rem;
    transition: var(--transition);

    &:hover {
        color: ${({ theme }) => theme.primary1};
    }
`;

export const ProjectSquare = styled(FaShareSquare)`
    color: ${({ theme }) => theme.primary5};
    font-size: 1.25rem;
    margin-right: 0.5rem;
    transition: var(--transition);

    &:hover {
        color: ${({ theme }) => theme.primary1};
    }
`;
