import React from 'react'

function TransactionFilter({filterChange}) {
  return (
    <div className="filter">
    <a href="#" className='icon' data-bs-toggle='dropdown'>
        <i className='bi bi-three-dots'></i>
    </a>
    <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow'>
        <li className='dropdown-header text-start'>
            <h6>Filter</h6>
        </li>
        <li>
            <a className='dropdown-item' onClick={()=> filterChange('Customer Name')}>
            Customer Name
            </a>
        </li>
        <li>
            <a className='dropdown-item' onClick={()=> filterChange('Transaction Amount')}>
            Transaction Amount
            </a>
        </li>
    </ul>
</div>
  )
}

export default TransactionFilter