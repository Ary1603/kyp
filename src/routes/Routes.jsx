import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Event details for the invitations
import { invitations_data } from '../data/invitations_data';

import Home from '../components/Home';
import BronzeTemplate from '../components/templates/bronze/BronzeTemplate';
import GoldTemplate from '../components/templates/gold/GoldTemplate';
import Gallery from '../components/gallery/Gallery';
import DiamondTemplate from '../components/templates/diamond/DiamondTemplate';
import ListConfirmationTable from '../components/tables/ListConfirmationTable';


function RoutesApp() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Daniela&Ricardo' element={<BronzeTemplate invitation_data={invitations_data.bronze_demo}/>}/>
            <Route path={`/Daniela&Ricardo/lista-invitados`} element={<ListConfirmationTable id={invitations_data.bronze_demo.id} class_Id={invitations_data.bronze_demo.class_Id} event={invitations_data.bronze_demo.event_name}/>}/>
            <Route path='/Sofia&Diego' element={<GoldTemplate invitation_data={invitations_data.gold_demo}/> }/>
           <Route path='/Ale&Neto' element={<DiamondTemplate invitation_data={invitations_data.gold_demo}/> } />
           {/*<Route path='/Daniela&Ricardo' element={<DemoBronze data={invitations_data.bronze_demo}/>}/>
             <Route path='*' element={<NotFound/>}/> */}
             <Route path='/prueba' element={<Gallery/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp