import { createContext, useState } from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";
import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import Welcome, { ErrorPage } from "./components/Welcome";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Applications from "./components/Applications";
import Profile from "./components/Profile";
import CreateJobs from "./components/recruiter/CreateJobs";
import MyJobs from "./components/recruiter/MyJobs";
import JobApplications from "./components/recruiter/JobApplications";
import AcceptedApplicants from "./components/recruiter/AcceptedApplicants";
import RecruiterProfile from "./components/recruiter/Profile";
import Footer from "./components/Footer/index";
// import ScrollToTop from "./components/ScrollToTop/index";
import MessagePopup from "./lib/MessagePopup";
import ScrollToTop from "react-scroll-to-top";
import isAuth, { userType } from "./lib/isAuth";
import WelcomePg from "./Pages/WelcomePg";
import { ReactComponent as MySVG } from "./arrow.svg";
import PopUp from "./components/PopUp/PopUp";

const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    width: "100%",
  },
}));

export const SetPopupContext = createContext();

function App() {
  const [fontSize, setFontSize] = useState(16);
  const classes = useStyles();
  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });
  const sizeIncrement = () => {
    setFontSize(fontSize + 1);
  };

  const sizeDecrement = () => {
    setFontSize(fontSize - 1);
  };
  const currentURL = window.location.pathname;
  return (
    <BrowserRouter>
      <div style={{ fontSize: `${fontSize}px` }}>
        <Suspense fallback={null}>
          <SetPopupContext.Provider value={setPopup}>
            <GlobalStyle />
            <Grid container direction="column">
              <Grid
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <ScrollToTop smooth component={<MySVG />} style={{marginBottom:'25px',right:'100px',bottom:'-10px'}} />
              </Grid>
              <Grid item xs>
                {currentURL === "/" || currentURL ===" "? "" : <Navbar />}
              </Grid>
              <Grid item className={classes.body}>
                <Routes>
                  <Route exact path="/" element={<WelcomePg />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/signup" element={<Signup />} />
                  <Route exact path="/logout" element={<Logout />} />
                  <Route exact path="/jobs" element={<Home />} />
                  <Route
                    exact
                    path="/applications"
                    element={<Applications />}
                  />
                  <Route
                    exact
                    path="/profile"
                    element={
                      userType() === "recruiter" ? (
                        <RecruiterProfile />
                      ) : (
                        <Profile />
                      )
                    }
                  />
                  <Route exact path="/addjob" element={<CreateJobs />} />
                  <Route exact path="/myjobs" element={<MyJobs />} />
                  <Route
                    exact
                    path="/job/applications/:jobId"
                    element={<JobApplications />}
                  />
                  <Route
                    exact
                    path="/employees"
                    element={<AcceptedApplicants />}
                  />
                  <Route element={<ErrorPage />} />
                </Routes>
              </Grid>
              <PopUp sizeInc={sizeIncrement} sizeDec={sizeDecrement} />
              <Footer />
            </Grid>
            <MessagePopup
              open={popup.open}
              setOpen={(status) =>
                setPopup({
                  ...popup,
                  open: status,
                })
              }
              severity={popup.severity}
              message={popup.message}
            />
          </SetPopupContext.Provider>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
