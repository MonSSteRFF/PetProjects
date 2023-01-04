import { Route, Routes, useNavigate } from "react-router-dom";

import {useEffect, useState} from 'react';
import './App.scss';

import Header from './components/Header';
import Tasks from "./components/Tasks";
import Sites from "./components/Sites";
import { getTasks } from "./api/TasksApi";
import { getSites } from "./api/SitesApi";
import { getHoursApi, getTempcoApi, getBirthdayApi } from "./api/HeaderApi";

function App() {


  const [TasksValue, setTasksValue] = useState([]);
  const [SitesValue, setSitesValue] = useState([]);

  const [HoursValue,setHoursValue] = useState([]);
  const [TempcoValue,setTempcoValue] = useState([]);
  const [BirthdayValue,setBirthdayValue] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getTasks().then(setTasksValue);
    getSites().then(setSitesValue);
    loadAllApi();

    const PagesInterval = setInterval(() => {
      const pathname = window.location.pathname;
      const nextPath = pathname === "/" ? "/sites" : "/";

      if (nextPath === "/"){
        getTasks().then((TasksValue) => {
          setTasksValue(TasksValue);
          navigate(nextPath);
          loadAllApi();
        });
      } else if (nextPath === "/sites") {
        getSites().then((SitesValue) => {
          setSitesValue(SitesValue);
          navigate(nextPath);
          loadAllApi();
        });
      }

    },15000);
    return () => clearInterval(PagesInterval);

  }, [navigate]);


  function loadAllApi(){
    getHoursApi().then((hoursValueRes) =>{
      setHoursValue(hoursValueRes);
    });
    getBirthdayApi().then((birthdayRes)=>{
      setBirthdayValue(birthdayRes);
    });
    getTempcoApi().then((tempcoRes)=>{
      setTempcoValue(tempcoRes);
    });
  }


  const routes = [
    {
      path: "/",
      element: <Tasks data={TasksValue} />
    },
    {
      path: "/sites",
      element: <Sites data={SitesValue} />
    }
  ]

    return (
      <div className="App">
        <Header Hours={HoursValue} Birthday={BirthdayValue} TempCo={TempcoValue}/>

        <div className="App__container">
          <Routes>
            {routes.map((rout,index)=>
              rout.path === "/" ?
                <Route path={rout.path} index element={rout.element} key={index}/>
                :
                <Route path={rout.path} element={rout.element} key={index}/>
            )}
          </Routes>
        </div>

      </div>
    );
}

export default App;