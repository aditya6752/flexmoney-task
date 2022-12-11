import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import axios from "axios";

function Home() {
const [slot,setSlot] = useState([]);
const allslots = ()=>{
  axios.get(`/slot/All`).then((response)=>{
    setSlot(response.data);
  })
}
  useEffect(() => {
    
  allslots();
    
  }, [])
const [Name,SetName] = useState("")
const [email,SetEmail] = useState("")
const [contact ,SetContact] = useState("")
const [selectedSlot,setSelectedSlot] = useState("")
const [Age,setAge] = useState(0)



const submitfunc = (e) =>{
  e.preventDefault();
  if (Age > 65 || Age < 18){
    alert("Age should be between 18 to 65")
  }
  const data = {
    name:Name,email,contact,Slot:selectedSlot,amount:200,age:Age
  }
  console.log(data)
  axios.post(`/user/register`,data).then((response)=>{
    console.log(response.data)
    window.location.assign('/success')
  }).catch((err)=>{console.log(err)})

}

  return (
    <Container className='mt-5 p-5'>
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>SetEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" onChange={(e)=>SetName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Contact</Form.Label>
          <Form.Control type="text" placeholder="contact" onChange={(e)=>SetContact(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" min={18} max={65} placeholder="age" onChange={(e)=>setAge(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Slot</Form.Label>
          <Form.Select aria-label="Slot" onChange={(e)=>setSelectedSlot(e.target.value)}>
          <option>select one option</option>  
          {slot.map((data , i)=>{return <option value={data._id} key={i}>{data.details}</option>})}
    </Form.Select>
    
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" placeholder="Name" readOnly value={200} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitfunc}>
          Submit
        </Button>
      </Form>
    </Container>

  );
}

export default Home;