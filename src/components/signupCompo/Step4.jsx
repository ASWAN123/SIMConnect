import React, { useEffect, useState } from "react";

const Step4 = ({ getValues ,  setValue }) => {

  const [ checked  , setChecked] = useState('')

  const paymentMethods = [
    {
      name: 'PayPal',
      imageSrc: './images/paypal.png',
      description: 'Paypal',
    },
    {
      name: 'Apple Pay',
      imageSrc: './images/applepay.png',
      description: 'Apple pay',
    },
    {
      name: 'MasterCard',
      imageSrc: './images/mastercard.png',
      description: 'MasterCard',
    },
    {
      name: 'American Express',
      imageSrc: './images/americanexpress.png',
      description: 'American express',
    },
  ];


  const handlePaymentClick = (paymentName) => {
    setValue('subscriptions.0.payment', paymentName);

    setChecked(paymentName)
  };

  useEffect(() => {
    let x = getValues('subscriptions.0.payment')
    if(x !== undefined){
      setChecked(x)

    }

  } ,  [])



  return (
    <section className="mt-8 w-[40%] mx-auto flex flex-col gap-2 ">
      <p className="text-gray-500 text-center mb-2">
        Testing purposes only and no money will be collected
      </p>
      <div className="flex flex-col gap-4">


      {paymentMethods.map((method, index) => (
        <div
          key={index}
          className="flex gap-2 border items-center cursor-pointer hover:bg-gray-200 p-1 rounded-md"
          onClick={() => handlePaymentClick(method.name)}
        >
          <img className="w-[30px]" src={method.imageSrc} alt={method.name} />
          <p className="">{method.description}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={
              checked === method.name
                ? 'w-6 h-6 ml-auto text-green-500'
                : 'w-6 h-6 ml-auto'
            }
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
      ))}
    



      </div>
    </section>
  );
};

export default Step4;
