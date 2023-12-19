import React from 'react';


const ordersData = [
  { id: 1, productName: 'IR Sensor', description: 'Description for Product A', quantity: 3 },
  { id: 2, productName: 'Metal Sensor', description: 'Description for Product B', quantity: 5 },
  { id: 3, productName: 'Water Level Controller', description: 'Description for Product C', quantity: 2 },
  { id: 4, productName: 'Automatic Sheet Measurement', description: 'Description for Product D', quantity: 1 },
  { id: 5, productName: 'Automatic Time Delay Sensor', description: 'Description for Product E', quantity: 4 },
  // Add more data as needed
];
const leadsData = [
    { id: 1, leadName: 'Rakesh Sharma', description: 'I need metal sensor. Is it Available Now? Please contact me', quantity: 120,contact:'9871450068' },
    { id: 2, leadName: 'Shailsha Verma', description: 'There is a need for Optical Fiber Amplifier Sensor. Please contact me', quantity: 100,contact:'9871450068' },
    { id: 3, leadName: 'Sagar Arora', description: 'Can you give me approx price for 45 stocks of IR Sensors.', quantity: 45,contact:'9871450068' },
    { id: 4, leadName: 'Vinay Kumar', description: 'There is a need for Digital Counter. Can you Call me?', quantity: 75,contact:'9871450068' },
    { id: 5, leadName: 'Komal Dagar', description: 'Enquiring for sufficient stocks of Digital Counter', quantity: 88,contact:'9871450068' },
    // Add more data as needed
  ];

const OrdersList = () => {
  return (
    <>
    <div className="orders-list-container ">
      <h2 className='center'>Total Orders</h2>
      <p className='center'>A summary of your orders</p>
      <div className="orders-scroll-container">
        {ordersData.map((order) => (
          <div key={order.id} className="order-item">
            <h4>{order.productName}</h4>
            <p>{order.description}</p>
            <p>Quantity: {order.quantity}</p>
          </div>
        ))}
      </div>
    </div>
    <br/>
    <div className="orders-list-container">
      <h2 className='center'>Total Leads</h2>
      <p className='center'>A summary of your Leads Received</p>
      <div className="orders-scroll-container">
        {leadsData.map((lead) => (
          <div key={lead.id} className="order-item">
            <h4>{lead.leadName}</h4>
            <h6 >Contact Details: {lead.contact}</h6>
            <p>{lead.description}</p>
            <p>Quantity: {lead.quantity}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default OrdersList;