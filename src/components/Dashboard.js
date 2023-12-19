import {useEffect,useState} from 'react';
import OrdersList from './Orders';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
// import PieChart from './PieChart';
const Dashboard = () => {
   
   const[record,setRecord] = useState([])
   const getData = () =>
   {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(resposne=> resposne.json())
       .then(res=>setRecord(res))
   }
   useEffect(() => {
      getData();
   },)
    
    return (
        <>
        <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  
    <div class="col main pt-5 mt-3">
         
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
            <li class="breadcrumb-item"><Link to="/analytics">Analytics</Link></li>
            <li class="breadcrumb-item active" aria-current="page"><Link to="/orders">Orders</Link></li>
        </ol>
        </nav>
        {/* <p class="lead d-none d-sm-block">Add Employee Details and Records</p> */}
        <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            
        </div>
        <div class="row mb-3">
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h5 class="text-uppercase">Total Orders</h5>
                        <h1 class="display-4">145</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        <div class="rotate">
                        <i class="fa fa-arrow"></i>
                        </div>
                        <h5 class="text-uppercase">Total Stocks</h5>
                        <h1 class="display-4">152</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-info h-100">
                    <div class="card-body bg-info">
                        <div class="rotate">
                          <i class="fa fa-share fa-4x"></i>
                        </div>
                        <h5 class="text-uppercase">Dead Stocks</h5>
                        <h1 class="display-4">100</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body">
                        <div class="rotate">
                            <i class="fa fa-share fa-4x"></i>
                        </div>
                        <h5 class="text-uppercase">Total Leads</h5>
                        <h1 class="display-4">25</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body">
                        <div class="rotate">
                            <i class="fa fa-share fa-4x"></i>
                        </div>
                        <h5 class="text-uppercase">New Stocks</h5>
                        <h1 class="display-4">75</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100" >
                    <div class="card-body " style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            <i class="fa fa-share fa-4x"></i>
                        </div>
                        <h5 class="text-uppercase">Total Revenue</h5>
                        <h1 class="display-4">1,10,000</h1>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <OrdersList/>
        
        </div>
        </div>
        </div>
        </>
    
    )
}
export default Dashboard