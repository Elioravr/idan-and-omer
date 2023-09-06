function Page({ children, isVisible, pageClassName }) {
  return (
    <div className={`page ${pageClassName} ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

export default Page;
