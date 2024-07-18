import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';

function Cards() {
    const [cards,setCards] = useState ([])

    const fetchData = () => { // de keda arrow function
      fetch ('https://islamel-sayed96.github.io/Dashboard-Json/cards.json')
      .then(res => res.json())
      .then(data =>{
        setCards(data);
      })
      .catch(e => console.log(e.message));
    };
  
    useEffect(() => {
      fetchData();
    }, []);

  return (
    <>
        {
        cards && cards.length>0 &&
        cards.map(card=><Card key={card._id} card={card}/>) 
        } 
    </>
  );
}

export default Cards