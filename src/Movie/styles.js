import styled from "styled-components";

//to style the table layout
export const TableWrap = styled.table`
font-family: arial, sans-serif;
border-collapse: collapse;
width: 100%;

th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 1rem;
};  
td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 1rem;
}
tr:nth-child(even) {
    background-color: #dddddd;
}`;
