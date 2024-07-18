import React, { useEffect, useState } from 'react'
import './recentSales.css'
import CardFilter from '../CardFilter/CardFilter'
import RecentSalesTable from '../RecentSalesTable/RecentSalesTable';
import TransactionFilter from '../TransactionFilter/TransactionFilter';

function RecentSales() {
    const[items , setItems] =useState([]);
    const [filter , setFilter] = useState('Customer Name');
    const handleFilterChange = filter =>{
        setFilter(filter);
    };

    const fetchData = () => { // de keda arrow function
        fetch ('https://islamel-sayed96.github.io/Dashboard-Json/transactions.json')
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
    <div className="card recent-sales overflow-auto">
        <TransactionFilter filterChange={handleFilterChange} />
        <div className="card-body">
            <h5 className="card-title">
            Transactions <span>| {filter}</span>
            </h5>
            <RecentSalesTable items={items}/>
        </div>
    </div>
  )
}

export default RecentSales