function ScheduleItem({ emoji, text, isLast = false }) {
  return (
    <div className='schedule-item'>
      <div className='point'></div>
      <div className='item-emoji'>{emoji}</div>
      <div className='item-text'>{text}</div>
      {isLast === false && <div className='line-to-next'></div>}
    </div>
  );
}

export default ScheduleItem;
