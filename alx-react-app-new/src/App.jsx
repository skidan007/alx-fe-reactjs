import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Counter from "./components/Counter";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
     
      <WelcomeMessage />
      <Header />
      <MainContent />
       <Counter />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />

    </>
  );
}

export default App;
 