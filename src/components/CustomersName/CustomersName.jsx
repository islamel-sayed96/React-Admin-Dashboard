// import React, { useEffect, useState } from 'react'

// function CustomersName() {
//     const [customers,setCustomers] = useState ([])
//     const fetchData = () => { // de keda arrow function
//         fetch ('http://localhost:4000/customers')
//         .then(res => res.json())
//         .then(data =>{
//           setCustomers(data);
//         })
//         .catch(e => console.log(e.message));
//       };
    
//       useEffect(() => {
//         fetchData();
//       }, []);
//   return (
//     <>
//     {customers.name}
//     </>
//   )
// }

// export default CustomersName