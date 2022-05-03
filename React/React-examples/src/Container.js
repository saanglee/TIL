const Container = ({ children }) => {
  console.log(children);
  return (
    <div
      style={{
        margin: 20,
        padding: 20,
        border: "3px solid black",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
