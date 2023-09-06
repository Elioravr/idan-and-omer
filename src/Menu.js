import { useState, useCallback } from 'react';

function Menu({ setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const createMenuButtonCallback = useCallback(
    (pageId) => {
      return () => {
        setCurrentPage(pageId);
        setIsOpen(false);
      };
    },
    [setCurrentPage]
  );

  return (
    <div className='Menu'>
      <div className='open-menu-button' onClick={toggleMenu}>
        <div className={`line-1 ${isOpen ? 'open' : ''}`}></div>
        <div className={`line-2 ${isOpen ? 'open' : ''}`}></div>
        <div className={`line-3 ${isOpen ? 'open' : ''}`}></div>
      </div>
      <div className={`menu-container ${isOpen ? 'open' : ''}`}>
        <div className='menu-item' onClick={createMenuButtonCallback('Home')}>
          דף הבית
        </div>
        <div
          className='menu-item'
          onClick={createMenuButtonCallback('Schedule')}
        >
          לוח הזמנים
        </div>
        <div className='menu-item' onClick={createMenuButtonCallback('Hotel')}>
          המלון
        </div>
        <div
          className='menu-item'
          onClick={createMenuButtonCallback('WhatToBring')}
        >
          מה להביא?
        </div>
        <div
          className='menu-item'
          onClick={createMenuButtonCallback('Information')}
        >
          מידע שימושי
        </div>
        <div
          className='menu-item'
          onClick={createMenuButtonCallback('Comments')}
        >
          תגובות
        </div>
      </div>
    </div>
  );
}
export default Menu;
