const food = () => {
  return (
    <>
      <div className="blog-main">
        <h1>food</h1>
        <p></p>
      </div>
      <div className="blog-sidebar">
        <h3>sections</h3>
        {[].map((item) => (
          <>
            <li>{item}</li>
          </>
        ))}
      </div>
    </>
  );
};

export default food;
