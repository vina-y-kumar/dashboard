import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
         <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <img style={{height:90}} src="https://i0.wp.com/made2automate.com/wp-content/uploads/2023/03/cropped-cropped-cropped-Untitled-design-2023-03-27T165416.581.png?w=261&ssl=1"></img>
                <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><i class="fa fa-user font-weight-bold"></i> <span className="ml-3">Overview</span></a></li>
                <li class="nav-item mb-2">

                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""><i class="fa fa-book-reader"></i> Data Report </a></li>
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""> <i class="fa fa-book-medical"></i> File Report </a></li>
                    </ul>
                </li>
                 <li class="nav-item mb-2"><Link class="nav-link text-secondary" to="/analytics">Analytics</Link></li>
                 <li class="nav-item mb-2"><Link class="nav-link text-secondary" to="/orders">Orders</Link></li>
                 <li class="nav-item mb-2"><Link class="nav-link text-secondary" to="/orders">Products</Link></li>
            </ul>
       </div>
    )
}
export default Sidebar