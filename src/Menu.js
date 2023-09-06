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
      <div className={`menu-container ${isOpen ? 'open' : ''}`}>
        <div className='menu-item'>דף הבית</div>
        <div className='menu-item'>המלון</div>
        <div className='menu-item'>לוח הזמנים</div>
        <div className='menu-item'>מה להביא?</div>
        <div className='menu-item'>מידע שימושי</div>
        <div className='menu-item'>תגובות</div>
      </div>
    </div>
  );
}
export default Menu;
