import React from 'react'

function RecentSalesTable({ items }) {
    const handleStatus = status =>{
        switch(status){
            case 'Approved':
                return 'success';
                break;
            case 'Pending':
                return 'warning';
                break;
            case 'Rejected':
                return 'danger';
                break;
            default:
                 return 'success';

        }
    }
  return (
 <>
 <table className='table table-borderless datatable'>
          <thead className='table-right'>
              <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Customer</th>
                  <th scope='col'>date</th>
                  <th scope='col'>amount</th>
                  <th scope='col'>Status</th>
              </tr>
          </thead>
          <tbody>
              {items &&
              items.length > 0 &&
              items.map(item=> (
                  <tr key={item.id}>
                      <th scope='row'>
                          <a href="#">{item.customer_id}</a>
                      </th>
                      <td>{item.name}</td>
                      <td>
                          <a href="#" className='text-primary'>
                              {item.date}
                          </a>
                      </td>
                      <td>${item.amount.toFixed(2)}</td>
                      <td>
                          <span className={`badge bg-${handleStatus(item.status)}`}>
                              {item.status}
                          </span>
                      </td>
                  </tr>
              ))
              }
          </tbody>
      </table>
 </>
  )
}

export default RecentSalesTable