import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from '../common/pages/login/Login';
import Patients from '../common/pages/patients/Patients';
import PatientSummary from '../common/pages/patientSummary/PatientSummary';
import PharmacogeneticGuidance from '../common/pages/pharmacogeneticGuidance/PharmacogeneticGuidance.jsx';
import PharmacogeneticTest from '../common/pages/pharmacogeneticTest/PharmacogeneticTest';
import Profile from '../common/pages/profile/Profile.jsx';
import SignUp from '../common/pages/signup/SignUp';
import TestFiles from '../common/pages/testFiles/TestFiles';
import UpdateMedicalHistory from '../common/pages/updateMedicalHistory/UpdateMedicalHistory';
import Home from '../pages/home/Home';
import PharmacogeneticResult from "../common/pages/pharmacogeneticResult/PharmacogeneticResult.jsx";

export default function Routing() {
  const routingList = [
    {
      path: '/',
      element: <Home/>,
      public: true
    },
    {
      path: '/login',
      element: <Login/>,
      public: true
    },
    {
      path: '/signup',
      element: <SignUp/>,
      public: true
    },
    {
      path: '/guidance',
      element: <PharmacogeneticGuidance/>,
      public: false
    },
    {
      path: '/results',
      element: <PharmacogeneticResult/>,
      public: false,
    },
    {
      path: '/medical-history',
      element: <UpdateMedicalHistory/>,
      public: false,
    },
    {
      path: '/profile',
      element: <Profile/>,
      public: false,
    },
    {
      path: '/test',
      element: <PharmacogeneticTest/>,
      public: false,
    },
    {
      path: '/patientSummary',
      element: <PatientSummary/>,
    },
    {
      path: '/testFiles',
      element: <TestFiles/>,
    },
    {
      path: '/patients',
      element: <Patients/>,
    },
  ];
  const access = localStorage.getItem('access_token')
  const publicRoute = (route) => route?.public;
  const privateRoute = (route) => access && !route?.public;
  return (
    <Routes>
      {routingList.map((route) => (publicRoute(route) || privateRoute(route)) && (
        <Route path={route.path} element={route.element}/>
      ))}
    </Routes>
  );
}
