import  React ,{ useState , useEffect} from 'react'
import countriesData from './countries.json'
import { Table, Form } from 'react-bootstrap'

const CountriesFilter = () => {
    const [countries, setCountries] = useState(countriesData);
    const [search, setSearch] = useState("");

    useEffect(() => {
     const data =countriesData.filter((country)=>
country.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())

     );
     setCountries(data);
    }, [search]);
  return (
     

    <div className='p-5'>
       <Form.Control
          type='text'
          placeholder='Type the code'
          className='mb-2'
          onChange={(event)=>setSearch(event.target.value)}

        />
      <Table>
        <thead>
        <tr>
            <th>#</th>
            <th>Country Name</th>
            <th>Country Code</th>
        </tr>
        </thead>
        <tbody>
            {countries.map((country,index)=>(
            <tr key={country.code}>
                <td>{index+1}</td>
                <td>{country.code}</td>
                <td>{country.name}</td>
                
            </tr>
            ))}
        
        </tbody>
        
       
      </Table>
    </div>
  );
};

export default CountriesFilter;
