// este archivo se agregó luego de hacer un npm install styled-components --save
// libro Install styled-components. Working with @types packages

import styled from 'styled-components';

// div container
export const AppContainer = styled.div`
    align-items: flex-start;
    background-color: #3179ba;
    display: flex;
    flex-direction: row;
    height: 100%;
    padding: 20px;
    width: 100%;
`
// column
export const ColumnContainer = styled.div`
    background-color: #ebecf0;
    width: 300px;
    min-height: 40px;
    margin-right: 20px;
    border-radius: 3px;
    padding: 8px 8px;
    flex-grow: 0;
    font-family: Arial;
`
// column title to wrap our column title
export const ColumnTitle = styled.div`
    padding: 6px 16px 12px;
    font-weight: bold;
`

// styles for cards
export const CardContainer = styled.div`
    background-color: #fff;
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 300px;
    border-radius: 3px;
    box-shadows: #091e4249 0px 1px 0px 0px;
`