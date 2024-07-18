import React from 'react'
import Cr7 from '../../images/assets/items/cr7 1.jpg'
import Messi from '../../images/assets/items/messi 1.jpg'
import Mortada from '../../images/assets/items/mortada-mansour-7156a1e4-f3e7-444c-9cd2-ac144f32f2f-resize-750.webp'
import Route from '../../images/assets/items/route.jpg'



function NavMessage() {
  return (
    <li className='nav-item dropdown'>
      <a href="#" className='nav-link nav-icon' data-bs-toggle='dropdown'>
        <i className='bi bi-chat-left-text'></i>
        <span className='badge bg-success badge-number'>3</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
        <li className='dropdown-header'>
          You have 3 new messages
          <a href="#">
            <span className='badge rounded-pill bg-primary p-2 ms-2'>
              View all
            </span>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='message-item'>
          <a href="#">
            <img 
            src={Route} 
            alt="" 
            className='rounded-circle'
            />
            <div>
              <h4>Route </h4>
              <p>مبروك يا هندسه حضرتك معانا في routetechsummit24 💖</p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='message-item'>
          <a href="#">
            <img 
            src={Cr7} 
            alt="" 
            className='rounded-circle'
            />
            <div>
              <h4>Cristiano Ronaldo </h4>
              <p>siuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu</p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='message-item'>
          <a href="#">
            <img 
            src={Messi}
            alt="" 
            className='rounded-circle'
            />
            <div>
              <h4>Lionel messi </h4>
              <p>Camera wowo</p>
              <p>6 hrs. ago</p>
            </div>
          </a>
        </li>
        
        <li>
          <hr className='dropdown-divider' />
        </li>

        <li className='message-item'>
          <a href="#">
            <img 
            src={Mortada} 
            alt="" 
            className='rounded-circle'
            />
            <div>
              <h4>مرتضي منصور  </h4>
              <p>ال سي دي 💽 بتاع رووت معايا لو مقبلوش التاسك بتاعك هطلعه</p>
              <p>8 hrs. ago</p>
            </div>
          </a>
        </li>

      </ul>
    </li>
  )
}

export default NavMessage