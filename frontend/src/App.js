import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Marks from './components/Marks/Marks'
function App() {
  const THEME = createTheme ({
    typography: {
      "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
      "fontSize": 14,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500
    }
  });
  return (
    <>
      <ThemeProvider theme={THEME}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/marks" element={<Marks />}></Route>
          </Routes>
        </Router>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
