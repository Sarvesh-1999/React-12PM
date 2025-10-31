import Card from "./Card";

const Dashboard = () => {
  const h2Style = {
    backgroundColor: "red",
    color: "black",
  };
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>Dashboard</h1>
      <h2 style={h2Style}>
        Another way of inline css
      </h2>
      <Card/>
    </div>
  );
};

export default Dashboard;
