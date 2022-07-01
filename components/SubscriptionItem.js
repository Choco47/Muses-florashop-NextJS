import Link from 'next/link';
import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/outline';

export default function SubscriptionItem({ subscription }) {
  const dynamicDescription = () => {
    if (subscription.name === 'Basic') {
      return (
        <div className="text-sm text-gray-600 mt-4">
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> One premium
            quality houseplant.
          </p>
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> Flora plant
            care guide.
          </p>
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> 40 days Plant
            Guarantee
          </p>
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> FREE delivery
            within HK.
          </p>
        </div>
      );
    } else if (subscription.name === 'Standard') {
      return (
        <div className="text-sm mt-4">
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> Top quality
            plants in each delivery.
          </p>
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> Our specialist
            planting up guide!
          </p>
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> 30 days Plant
            Guarantee
          </p>

          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> FREE delivery
            within HK.
          </p>
        </div>
      );
    } else if (subscription.name === 'Premium') {
      return (
        <div className="text-sm text-gray-600 mt-4">
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> A seasonal
            selection of edible plants
          </p>
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> Our specialist
            planting up guide!
          </p>
          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> 40 days Plant
            Guarantee
          </p>

          <p className="my-2">
            <CheckCircleIcon className="h-4 w-4 inline-block" /> FREE delivery
            within HK.
          </p>
        </div>
      );
    }
  };

  const buttonStyle = () => {
    return subscription.name === 'Standard'
      ? 'text-purple-700 bg-white rounded opacity-75 hover:opacity-100 hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4'
      : 'text-purple-700 border border-purple-700 rounded hover:bg-purple-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4';
  };

  const divStyle = () => {
    return subscription.name === 'Standard'
      ? 'md:w-1/3 text-white bg-purple-700 rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0'
      : 'md:w-1/3 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0';
  };

  const h3Style = () => {
    return subscription.name === 'Standard'
      ? 'text-lg'
      : 'text-gray-600 text-lg';
  };

  const priceStyle = () => {
    return subscription.name === 'Standard'
      ? 'font-bold text-4xl'
      : 'font-bold text-black text-4xl';
  };

  return (
    <div className={`w-full ${divStyle()}`}>
      <Link href={`/subscription/${subscription.slug}`}>
        <h3 className={`${h3Style()}`}>{subscription.name}</h3>
      </Link>
      <p className={`${h3Style()}`}>
        <span className={`${priceStyle()}`}>${subscription.price}</span> /Month
      </p>

      {dynamicDescription()}

      <button className={`w-full ${buttonStyle()}`} type="button">
        Choose Plan
      </button>
    </div>
  );
}

//8
