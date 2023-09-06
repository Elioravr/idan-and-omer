import { useState, useCallback } from 'react';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  console.log('isOpen', isOpen);

  return (
    <div className='Menu'>
      <div className='open-menu-button' onClick={toggleMenu}>
        <div className={`line-1 ${isOpen ? 'open' : ''}`}></div>
        <div className={`line-2 ${isOpen ? 'open' : ''}`}></div>
        <div className={`line-3 ${isOpen ? 'open' : ''}`}></div>
      </div>
    </div>
  );
}
export default Menu;
