import React from 'react'
import { Table } from "react-bootstrap";
import countries from "./countries.json";

const CountriesTable = () => {
  return (
    <div className='p-5'>
      <Table className="square border border-4">
      <thead>
        <tr>
          All The Countries With Codes
        </tr>
        <tr>
          <th>#</th>
          <th>Country Name</th>
          <th>Country Code</th>
        </tr>
      </thead>
      <tbody>
      {countries.map((country, index)=>(
        <tr key={index}>
          <td>{index+1}</td>
          <td>{country.name}</td>
          <td>{country.code}</td>
        </tr>))}
      </tbody> 
    </Table>
    </div>
  )
}

export default CountriesTable;
