import React, { useEffect, useState } from 'react'
import CardFilter from '../CardFilter/CardFilter'
import RecentActiveItem from '../RecentActiveItem/RecentActiveItem';
import './recentActivity.css'

function RecentActivity() {
    const[items , setItems] =useState([]);
    const [filter , setFilter] = useState('Today');
    const handleFilterChange = filter =>{
        setFilter(filter);
    };

    const fetchData = () => { // de keda arrow function
        fetch ('http://localhost:4000/recentactiviy')
        .then(res => res.json())
        .then(data =>{
          setItems(data);
        })
        .catch(e => console.log(e.message));
      };
    
      useEffect(() => {
        fetchData();
      }, []);
  return (
    <div className="card">
        <CardFilter filterChange={handleFilterChange}/>
        <div className="card-body">
            <h5 className="card-title">
                Recent-Active <span>| {filter}</span>
            </h5>
            <div className="activity">
                {items &&
                items.length > 0 &&
                items.map(item => (
                    <RecentActiveItem key={item._id} item={item}/>
                ))
                }
            </div>
        </div>
    </div>
  )
}

export default RecentActivity