import { FunctionComponent, useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import CardAddMember from '../components/CardAddMember/CardAddMember';
import iconRocket from '../assets/rocket.svg';
import './TeamMembers.css';
import axios from 'axios';
import SkeletonCard from '../components/Skeleton/SkeletonCard';

export type MemberType = {
  id?: number,
  name: string,
  email: string,
}

const TeamMembers:FunctionComponent = () => {

  const [listMember, setListMember] = useState<MemberType[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  const fetchListMembers = () => {

    axios.get("http://localhost:3000/members")
      .then(res => {
        setListMember(res.data);
      })
      .catch(() => {
        console.log("Error fetching data");
      })
  }

  const displaySkeleton = () => {
    let skeletons = []
    for(let i = 0; i < 7; i++){
      skeletons.push(<SkeletonCard />)
    }

    return skeletons;
  }

  useEffect(() => {
    fetchListMembers();
  }, [refresh])

  return (
    <div className='team-members'>
      <div className="title-page">
        <div className="icon-rocket">
          <img src={iconRocket} alt="icon rocket" />
        </div>
        <p>Team Members<br/><span>Rocket</span></p>
        <ul className='filter'>
          <li className='active'>All</li>
          <li>Male</li>
          <li>Female</li>
        </ul>
      </div>
      <div className="list-member">
        <CardAddMember setRefresh={setRefresh} />
        {
          listMember.length > 0 && listMember.map(member => <Card member={member} key={member.id} setRefresh={setRefresh} />)
        }
        {
          listMember.length <=0 && displaySkeleton().map(skeleton => skeleton)
        }
      </div>
    </div>
  )
}

export default TeamMembers