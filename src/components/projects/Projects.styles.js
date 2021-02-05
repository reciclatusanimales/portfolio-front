import styled from 'styled-components';

export const ProjectsContainer = styled.section`
    padding: 5rem 0;
    background: ${({ theme }) => theme.grey10};
`;

export const SectionCenter = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;

    @media screen and (min-width: 992px) {
        & {
            width: 95vw;
        }
    }
`;
