import React from 'react';
import styled from 'styled-components';

const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 27%;
  margin: 3% 3% 3% 0;
`;

const TableHeader = styled.p`
  text-align: center;
  height: 40px;
  color: #306ab5;
  text-transform: uppercase;
  font-family: sans-serif;
  line-height: 40px;
  font-size: 16px;
  font-weight: 900;
  font-style: italic;
  background-color: #f9e01d;
  text-align: left;
  padding-left: 20px;
`;

const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
`;

const Cell = styled.p`
  color: #306ab5;
  text-transform: uppercase;
  height: 50px;
  line-height: 50px;
  margin-top: 0px;
  padding: 0px;
  padding-left: 20px;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: bold;
  background-color: #f4f4f4;
  margin-bottom: 2px;
  margin-left: 2px;
`;

const Value = styled(Cell)`
  text-align: center;
`;

const StatsTable = (props) => {
  const { attack, defense, spatt, spdef, hp } = props.stats;

  return (
    <Table>
      <TableHeader>Statystyki</TableHeader>
      <Row>
        <Cell>Atak</Cell>
        <Value>{attack}</Value>
      </Row>
      <Row>
        <Cell>Obrona</Cell>
        <Value>{defense}</Value>
      </Row>
      <Row>
        <Cell>SP.atak</Cell>
        <Value>{spatt}</Value>
      </Row>
      <Row>
        <Cell>SP.obrona</Cell>
        <Value>{spdef}</Value>
      </Row>
      <Row>
        <Cell>Życie</Cell>
        <Value>{hp}</Value>
      </Row>
    </Table>
  );
};

export default StatsTable;
