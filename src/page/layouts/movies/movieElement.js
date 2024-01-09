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

export const MovieText = styled.h3`
  text-align: center;
  color: #000;
  margin-top: 10px;
  font-weight: bold;
  font-size: 17px;
`;


export const PageTable = styled.div`
  margin-top: 20px;
  overflow: auto;
  background-color: #fff;
  width: 100%;
  height: calc(100vh - 230px);
`;

export const PageSetTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 15px;
  border: none;
  width: 100%;
  border-radius: 5px;
`;

export const PageTableHead = styled.thead``;

export const PageTableRow = styled.tr`
  border: 0px;
  border-color: #ffffff;
`;

export const PageHead = styled.th`
  margin: 0 20px;
  border: 0px;
  color: #000;
  font-size: 15px;
  text-align: center;
`;

export const PageTableBody = styled.tbody``;

export const PageTableData = styled.td`
  text-align: center;
  cursor: pointer;
  font-size: 15px;
  padding-top: 0.8vw;
  border-bottom: 1px solid rgb(213, 211, 211);
`;