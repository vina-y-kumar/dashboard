
import React from 'react';
import PieChart from './Analytics';

const purchasesData = [
  {
    id: 1,
    productName: 'Optical Fiber Amplifier Sensor E3X-NA41',
    description: 'This Amplifier Converts the Light signal of Optical Fiber into Electrical signal which is a DC Signal which can be used to give to controller like PLC.',
    price: 'Rs. 1,480',
    customerName: 'Megha Aggarwal',
    quantity: 20,
    imageUrl: 'https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/2-33.webp?fit=600%2C600&ssl=1', 
  },
  {
    id: 2,
    productName: 'Digital Counter Totalizer with Proximity Sensor Input I Make: Multispan CT-3000',
    description: 'Connects with Proximity swtich which can be PNP/NPN and displays count value. Also called as Count Totalizer',
    price: 'Rs.850',
    customerName: 'John Doe',
    quantity: 12,
    imageUrl: 'https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/2-17.webp?fit=600%2C600&ssl=1'
  },
  {
    id: 3,
    productName: 'TC-19 ( Fixed input, Single Display Temperature Controller) Manufactured by multispan',
    description: 'It appears that you’re referring to a temperature controller with the designation “TC-19.” TC-19 could be a specific model or product name used by a manufacturer for a temperature controller. ',
    price: 'Rs.1,220',
    customerName: 'Vinay Kumar',
    quantity: 22,
    imageUrl: 'https://i0.wp.com/made2automate.com/wp-content/uploads/2023/09/Untitled-design-2023-09-11T140138.483.png?fit=600%2C600&ssl=1', 
  },
  {
    id: 4,
    productName: '24VDC Relay OMRON MY2N-GS I 8 Pin Relay with Base',
    description: 'DC relay is used to switch loads like Motor or used in Control wiring. It needs a control signal which is of 24VDC to trigger.',
    price: 'Rs. 350',
    customerName: 'Kamini Singh',
    quantity: 7,
    imageUrl: 'https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/2-19.webp?fit=600%2C600&ssl=1'
  },
  {
    id: 5,
    productName: 'Day-Night Delay Timer with Relay Output I Programmable Electronic Timer Switch 4 - Pin, 230 Volt AC',
    description: 'LEYDEN® Digital Programmable Electronic Timer Switch 4 – Pin, 230 Volt AC TM619H-2, 30A, 18 Programs Digital Timer with Clock and Auto Cut Off Function Taiwan (White)',
    price: 'Rs. 750',
    customerName: 'Aryan Singhal',
    quantity: 15,
    imageUrl: 'https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/2-23.webp?fit=600%2C600&ssl=1'
  },
];

const PurchaseList = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <div className="purchase-list-container ">
      <h2 className='center'>All Orders</h2>
      <div className="list-group">
        {purchasesData.map((purchase) => (
          <div key={purchase.id} className="list-group-item purchase-item">
            <div className="purchase-image-container">
              <img src={purchase.imageUrl} alt={purchase.productName} className="purchase-image" />
            </div>
            <div className="purchase-details">
              <h4>{purchase.productName}</h4>
              <p>{purchase.description}</p>
              <p>Price: {purchase.price}</p>
              <b>Customer: {purchase.customerName}</b>
              <p>Quantity: {purchase.quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};

export default PurchaseList;
