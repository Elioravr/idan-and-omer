function Page({ title, children, isVisible, pageClassName }) {
  return (
    <div className={`page ${pageClassName} ${isVisible ? 'visible' : ''}`}>
      {title && (
        <div className='title'>
          <div>{title}</div>
        </div>
      )}
      {children}
    </div>
  );
}

export default Page;
