import React from 'react';
import PropertyBanner from './PropertyBanner';
import Operate from './Operate';
import Reasons from './Reasons';
import YourHotel from './YourHotel';

export default function ListProperty() {
  return (
    <>
      <PropertyBanner />
      <Operate />
      <Reasons />
      <YourHotel />
    </>
  );
}
