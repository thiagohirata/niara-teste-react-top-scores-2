import React from "react";
import MainMenu from "./components/MainMenu";
import TopScores from "./components/TopScores";

const App: React.FC = () => {
  const [currentView, setCurrentView] = React.useState("mainmenu");
  return (
    <>
      {currentView === "mainmenu" && <MainMenu setView={setCurrentView} />}
      {currentView === "topscores" && <TopScores setView={setCurrentView} />}
    </>
  );
};

export default App;
