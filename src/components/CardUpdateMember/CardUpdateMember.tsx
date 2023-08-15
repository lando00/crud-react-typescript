import {FunctionComponent, useState, ChangeEvent, Dispatch, SetStateAction} from "react"
import avatar from '../../assets/members/member1.png';
import iconClose from "../../assets/close.svg";
import './CardUpdateMember.css';
import { MemberType } from "../../pages/TeamMembers";
import axios from "axios"

type Props = {
 setRefresh: Dispatch<SetStateAction<boolean>>,
 memberSelected: MemberType,
 setShowCardUpdate: Dispatch<SetStateAction<boolean>>
}

const CardUpdateMember: FunctionComponent<Props> = ({setRefresh, memberSelected, setShowCardUpdate}) => {

  const [member, setMember] = useState<MemberType>(memberSelected);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMember(state => {
      return {...state, [e.target.id] : e.target.value}
    })
  }

  const addNewMember = () => {
    axios.put(`http://localhost:3000/members/${memberSelected.id}`, member)
      .then(() => {
        setRefresh(refresh => !refresh);
        setShowCardUpdate(false);
      })
    
  }

  return (
    <div className='card cardUpdateMember'>
        <img src={iconClose} alt='' className='icon-close' onClick={() => {setShowCardUpdate(false)}} />
        <p className='email'>Update Member</p>
        <img src={avatar} alt="" />
        <input type='text' className='name' placeholder='Name' value={member.name} id="name" onChange={(e) => handleChange(e)} />
        <input type='email' className='email' placeholder='example@gmail.com' value={member.email} id="email" onChange={(e) => handleChange(e)} />
        <button onClick={addNewMember}>Save</button>
    </div>
  )
}

export default CardUpdateMember;