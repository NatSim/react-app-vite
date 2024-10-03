import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import Button from '@mui/material/Button';


//Table Header component

const TableHeader =()=>{

    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

//Table Body component

const TableBody = props =>{

    const rows = props.characterData.map((row,index)=>{
       return(
        <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>

                <Button variant="warning"
                onClick={()=> props.removeCharacter(index)}>Delete</Button>
            </td>
        </tr>
       ) 
    })
   return(
    <tbody>{rows}</tbody>
     )
    
}


const MyTable = (props) =>{
    const {characterData,removeCharacter} = props;

    console.info(characterData)
return (
    <Table hover striped borderd size="sm">
       <TableHeader />
       <TableBody characterData={characterData} 
       removeCharacter={removeCharacter}/>
        </Table>
)        
}

export default MyTable;
