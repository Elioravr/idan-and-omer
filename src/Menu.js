import { useState } from 'react';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='Menu'>
      <div className='open-menu-button'>
        <div className='line-1'></div>
        <div className='line-2'></div>
        <div className='line-3'></div>
      </div>
    </div>
  );
}
export default Menu;
