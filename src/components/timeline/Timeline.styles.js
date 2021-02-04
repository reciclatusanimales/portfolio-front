import styled from 'styled-components';

export const TimelineCenter = styled.div`
    width: 80vw !important;
    max-width: 40rem !important;
`;

export const Number = styled.span`
    position: absolute;
    top: 50%;
    /* right:50%; */
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin-bottom: 0;
    background: ${({ theme }) => theme.primary5};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: ${({ theme }) => theme.primary1};
    font-weight: bold;
`;

export const TimelineItem = styled.article`
    border-top: 2px dashed ${({ theme }) => theme.primary5};
    margin: 0;
    padding: 4rem 2rem;
    position: relative;

    p {
        margin-bottom: 0;
    }
    &:nth-child(even) {
        border-left: 2px dashed ${({ theme }) => theme.primary5};
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
        margin-right: 2rem;
        padding-right: 0;
    }

    &:nth-child(odd) {
        border-right: 2px dashed ${({ theme }) => theme.primary5};
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        margin-left: 2rem;
        padding-left: 0;
    }

    &:first-child {
        border-top: 0;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    }

    &:last-child {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    &:nth-child(even) ${Number} {
        left: 0;
    }

    &:nth-child(odd) ${Number} {
        right: 0;
        -webkit-transform: translate(50%, -50%);
        transform: translate(50%, -50%);
    }
`;