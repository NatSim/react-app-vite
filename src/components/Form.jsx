import { useState } from "react";
import Button from '@mui/material/Button';

//destructor
const Form = ({addCharacter})=>{
    const [formData,setFormData]= useState({
        name:'',
        job:'',
    });

//handle submit
const handleSubmit = (e)=>{
    e.preventDefault();
    addCharacter(formData);
    setFormData({name:"",job:""});
}


    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
             name='name'
              id='name'
              placeholder="Name"
            required
            value={formData.name}
            onChange={(e)=> setFormData({
                ...formData,name:e.target.value
            })}
            />
            <br/><br/>
            <input type="text"
            name="job"
            id="job"
            placeholder="Job"
            required
            value={formData.job} 
              onChange={(e)=> setFormData({
                ...formData,job:e.target.value
            })}/>
           <br/> <br/>
           
            <Button variant="contained" type='submit'>Submit</Button>
            <br/>
        </form>
    )
}
export default Form;