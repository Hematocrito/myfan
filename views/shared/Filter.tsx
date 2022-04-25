import { Button, Input, Select } from 'components';

import React, { Children, useState } from 'react';

import FilterIcon from 'public/assets/icons/filter-02.png';
import FilterPostIcon from 'public/assets/icons/filter-03.png';
import Image from 'next/image';

export const Filter = ({ children, className }: any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col mt-2 mx-4 cursor-pointer">
      <div
        onClick={() => setExpanded(!expanded)}
        className={`text-blue-450 ${className}`}
      >
        <div
          style={{
            position: 'relative',
            width: '15px',
            height: '15px',
            marginRight: '5px',
          }}
        >
          <Image src={FilterIcon} layout="fill" />
        </div>
        <span className="flex items-center font-medium">Filter</span>
        <div
          className="mt-1"
          style={{
            position: 'relative',
            width: '15px',
            height: '10px',
            marginRight: '5px',
          }}
        >
          <Image src={FilterPostIcon} layout="fill" />
        </div>
      </div>
      <div
        className={`transition-height duration-700 ease-in-out overflow-hidden ${
          expanded ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};
