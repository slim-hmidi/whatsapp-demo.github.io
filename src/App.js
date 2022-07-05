import React from "react";
import { Route, Routes } from "react-router-dom";
import SendWithWhatsapp from "./social-media/SendWithWhatsapp"
import SendWithFb from "./social-media/SendWithFb"
import SendWithLinkedin from "./social-media/SendWithLinkedin"
import HomePage from "./social-media/index"


export default function App() {
  return (<Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/send-with-whatsapp' element={<SendWithWhatsapp />}/>
    <Route path='/send-with-fb' element={<SendWithFb />}/>
    <Route path='/send-with-linkedin' element={<SendWithLinkedin />}/>
    </Routes>)
}
