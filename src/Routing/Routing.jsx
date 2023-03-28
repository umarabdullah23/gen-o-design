import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from '../common/pages/login/Login';
import Patients from '../common/pages/patients/Patients';
import PatientSummary from '../common/pages/patientSummary/PatientSummary';
import PharmacogeneticResults from '../common/pages/pharmacogeneticResults/PharmacogeneticResults';
import PharmacogeneticTest from '../common/pages/pharmacogeneticTest/PharmacogeneticTest';
import Settings from '../common/pages/profile/Settings';
import Profile from '../common/pages/profile/Settings';
import SignUp from '../common/pages/signup/SignUp';
import TestFiles from '../common/pages/testFiles/TestFiles';
import UpdateMedicalHistory from '../common/pages/updateMedicalHistory/UpdateMedicalHistory';
import Home from '../pages/home/Home';

export default function Routing() {
	const routingList = [
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/signup',
			element: <SignUp />,
		},
		{
			path: '/pharmacogenetic',
			element: <PharmacogeneticResults />,
		},
		{
			path: '/update',
			element: <UpdateMedicalHistory />,
		},
		{
			path: '/settings',
			element: <Settings />,
		},
		{
			path: '/pharmacogeneticTest',
			element: <PharmacogeneticTest />,
		},
		{
			path: '/patientSummary',
			element: <PatientSummary />,
		},
		{
			path: '/testFiles',
			element: <TestFiles />,
		},
		{
			path: '/patients',
			element: <Patients />,
		},
	];
	return (
		<Routes>
			{routingList.map((route) => (
				<Route path={route.path} element={route.element} />
			))}
		</Routes>
	);
}