import './Card.css';
import member1 from '../../assets/members/member1.png';
import iconEdit from '../../assets/edit.svg';
import iconDelete from '../../assets/delete.svg';
import iconHeart from '../../assets/heart.svg';
import { FunctionComponent, Dispatch, SetStateAction, useState } from 'react';
import { MemberType } from '../../pages/TeamMembers';
import axios from "axios";
import CardUpdateMember from '../CardUpdateMember/CardUpdateMember';

type Props = {
  member: MemberType;
  setRefresh: Dispatch<SetStateAction<boolean>>
}

const Card: FunctionComponent<Props> = ({member, setRefresh}) => {

  const [showCardUpdate, setShowCardUpdate] = useState<boolean>(false);
  const displayCardUpdate = showCardUpdate && <CardUpdateMember setRefresh={setRefresh} memberSelected={member} setShowCardUpdate={setShowCardUpdate} />;

  const deleteMember = (id ?: number) => {
    axios.delete(`http://localhost:3000/members/${id}`)
      .then(() => {
        setRefresh(refresh => !refresh);
      })
  }

  return (
    <div className='card'>
        <img src={iconHeart} alt='' className='icon-heart' />
        <img src={member1} alt="" />
        <p className='name'>{member.name}</p>
        <p className='email'>{member.email}</p>
        <ul className='action'>
            <li onClick={() => setShowCardUpdate(true)}>
                <img src={iconEdit} alt="" className='icon-calendar' />Edit
            </li>
            <li className='active' onClick={() => deleteMember(member.id)}>
                <img src={iconDelete} alt="" className='icon-eye'/>Delete
            </li>
        </ul>
        {displayCardUpdate} 
    </div>
  )
}

export default Card