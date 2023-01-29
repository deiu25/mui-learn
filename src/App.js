import Navbar from "./components/Navbar";
// import Test from "./Test";
const linksArray = ["Products", "Services", "Overview", "Contact Us"];

function App() {
  return (
    <div>
      {/* <Test /> */}
      <Navbar links={linksArray} />
    </div>
  );
}

export default App;
