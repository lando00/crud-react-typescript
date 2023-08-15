import {FunctionComponent, useState, ChangeEvent, Dispatch, SetStateAction} from "react"
import defaultPicture from '../../assets/members/defaultPicture.png';
import './CardAddMember.css';
import '../Card/Card.css';
import { MemberType } from "../../pages/TeamMembers";
import axios from "axios"

type Props = {
 setRefresh: Dispatch<SetStateAction<boolean>>
}

const CardAddMember: FunctionComponent<Props> = ({setRefresh}) => {

  const [member, setMember] = useState<MemberType>({
    name: "",
    email: ""
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMember(state => {
      return {...state, [e.target.id] : e.target.value}
    })
  }

  const addNewMember = () => {
    axios.post("http://localhost:3000/members", member)
      .then(() => {
        setMember({name: "", email: ""});
        setRefresh(refresh => !refresh);
      })
    
  }

  return (
    <div className='card'>
        <p className='email'>Add New Member</p>
        <img src={defaultPicture} alt="" />
        <input type='text' className='name' placeholder='Name' value={member.name} id="name" onChange={(e) => handleChange(e)} />
        <input type='email' className='email' placeholder='example@gmail.com' value={member.email} id="email" onChange={(e) => handleChange(e)} />
        <button onClick={addNewMember}>Add</button>
    </div>
  )
}

export default CardAddMember;