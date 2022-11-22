import './App.css';
import { BrowserRouter as useParams, Route ,Link, Routes, useNavigate} from "react-router-dom";
import Map from './map';
import { useEffect, useState, createContext, useContext } from 'react';
import planets from './planets';
import Header from './Header'
import { ConnexionContextProvider } from "./contexts/connexionContext";
import fetchFunctions from './Fetch'
import PlanetCard from './PlanetCard'
import SignIn from './SignIn';
import Comments from './Comments';
import Confirmation from './Confirmation';
import Account from './Account';
import PlanetInfo from './PlanetInfo';
import Page404 from './Page404';
import Connexion from './Connexion';
import Footer from './Footer';
import PlanetPopUp from './planetPopUp';

function App() {

  const [planetsData, setPlanetsData] = useState({planets})
  const [currentPlanet, setCurrentPlanet] = useState(false)
  const [planetOnHover, setPlanetOnHover] = useState(false)
  const [initial, setInitial] = useState({});

  console.log(planets)

  useEffect(() => {
    Object.entries(planets).forEach(([key, value]) =>
      fetchFunctions.fetchData(value.lat, value.long, true).then((data) => {
        console.log(data)
        setInitial((old) => ({ ...old, [key]: data.daily }));
      })
    );
  }, []);

  const navigate = useNavigate()

  useEffect(() => {
    currentPlanet ? navigate(`planets/${currentPlanet}`) : navigate("/")
  }, [currentPlanet])

  useEffect(() => {
    // planetOnHover && console.log(tooltip.style)
  }, [planetOnHover])

  return (
    <div className="App">
    <ConnexionContextProvider>
        <Header></Header>
        {/* <PlanetContext.Provider value={[planetsData, setPlanetsData]}> */}
          <Routes>
              <Route path="planets/:planet" element={<PlanetPopUp initial={initial} />} />
              <Route path="planets/:planet/details" element={<PlanetCard />} />
              <Route path="planets/:planet/comments" element={<Comments />} />
              <Route path="account/connexion" element={<Connexion />} />
              <Route path="account/signIn" element={<SignIn />} />
              <Route
                path="account/confirmation/:action"
                element={<Confirmation />}
              />
              <Route path="account/*" element={<Account />} />
              <Route path="planets/:planet/info" element={<PlanetInfo />} />
              <Route path="/error_404" element={<Page404 />} />
          </Routes>
          <Map setCurrentPlanet={setCurrentPlanet} />
          <div id="closing">Back to Galaxy</div>
        {/* </PlanetContext.Provider> */}
      </ConnexionContextProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
