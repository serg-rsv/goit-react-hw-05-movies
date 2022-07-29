import styled from 'styled-components';

const MovieImg = styled.img`
  height: 300px;
`;

const MovieCard = styled.div`
  display: flex;
  gap: 12px;

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export { MovieImg, MovieCard };
