function ScheduleHeader({ date }) {
  return (
    <div className='schedule-header'>
      <div className='emoji'>{'🗓️'}</div>
      <div className='text'>{date}</div>
    </div>
  );
}

export default ScheduleHeader;
