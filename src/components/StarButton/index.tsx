import { Icon } from '@iconify/react';
import { NavLink } from '../NavLink';
import { useState } from 'react';

export const StarButton = () => {
  const count = 100; // Assuming this is a numeric value

  return (
    <div className="group hidden md:block">
      <NavLink
        href="https://github.com/mohitdebian"
        target="_blank"
      >
        <span className="flex items-center gap-1">
          <Icon
            icon="material-symbols:star-outline-rounded"
            fontSize={22}
            className="origin-center transition-transform duration-300 group-hover:scale-125"
          />
          {count.toLocaleString()} Stars
        </span>
      </NavLink>
    </div>
  );
};
