import styled from 'styled-components';

export const PageSide = styled.div`
   display: grid;
   grid-template-columns: 250px calc(80vw - 250px);
   height: 100vh;
`;

export const PageRight = styled.div`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-rows: 2fr 6fr;
  overflow: auto;
`;

export const PageHeader = styled.h1`
  color: #000;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
`;