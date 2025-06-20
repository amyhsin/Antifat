import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Doctors from "./Doctors";
import About from "./About";
import Doctor from "./Doctor";
import Schedule from "./Schedule";
import Service from "./Service";
const base = import.meta.env.BASE_URL;

function Pages() {
  return (
    <>
      <Routes>
        <Route path={`${base}`} element={<Home />} />
        <Route path={`${base}about/intro`} element={<About />} />
        <Route path={`${base}doctors`} element={<Doctors />} />
        <Route path={`${base}doctors/:id`} element={<Doctor />} />
        <Route path={`${base}about/schedule`} element={<Schedule />} />
        <Route path={`${base}service/:category`} element={<Service />} />
      </Routes>
    </>
  );
}

export default Pages;
