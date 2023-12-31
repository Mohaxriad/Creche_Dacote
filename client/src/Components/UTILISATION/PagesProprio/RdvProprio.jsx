import React from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../HomePage/Footer";
import axios from "../../../api/axios";
import useRefreshToken from "../../../hooks/useRefreshToken";
import { useEffect } from "react";
import { useState } from "react";
const RdvProprio = () => {

  const refresh = useRefreshToken()
  const User = JSON.parse(localStorage.getItem('user'))
  const[parentRes,setParentRes]=useState([])

  useEffect(() => {
    async function getData(){
       const newAccessToken = await refresh();
       const response = await axios.get('../rdv/proprio',
       {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${newAccessToken}`,
        },
        withCredentials: true,
      })
      
        console.log(response.data)
        setParentRes(response.data)
      }
      getData();
  }, []);
  const people = [
    {
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
      Tel: "0563748202",
      Jour: "12/05/2023",
      Heure: "10:00",
      Creche: "Les Anges",
    },
    {
      name: "Michael Foster",
      email: "michael.foster@example.com",
      Tel: "0563748202",

      Jour: "12/05/2023",
      Heure: "11:00",
      Creche: "Les Bebes",
    },
    {
      name: "Dries Vincent",
      email: "dries.vincent@example.com",
      Tel: "0563748202",
      Jour: "12/05/2023",
      Heure: "14:00",
      Creche: "Les Anges",
    },
    {
      name: "Lindsay Walton",
      email: "lindsay.walton@example.com",
      Tel: "0563748202",
      Jour: "22/05/2023",
      Heure: "10:00",
      Creche: "Mini World",
    },
    {
      name: "Courtney Henry",
      email: "courtney.henry@example.com",
      Tel: "0563748202",
      Jour: "13/05/2023",
      Heure: "09:00",
      Creche: "Les enfants du monde",
    },
    {
      name: "Tom Cook",
      email: "tom.cook@example.com",
      Tel: "0563748202",
      Jour: "16/04/2023",
      Heure: "09:00",
      Creche: "Tofoula",
    },
  ];
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <h2 className="my-5 text-center text-3xl font-bold text-rose-900 ">
        Vos Rendez-vous
      </h2>
      <ul role="list" className="mx-[2%] sm:mx-[10%] ld:mx-[20%]">
        {parentRes.map((person) => (
         
          <li
            key={person.parent.email}
            className=" mt-5 pt-10  pb-8 px-10 ring ring-[#ff7171] rounded-lg bg-[#ffc6c6] "
          >
            <div className="flex justify-between -mx-5">
              <div className="flex gap-x-4">
                {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}
                <UserCircleIcon
                  className="h-12 w-12 text-[#000000] "
                  aria-hidden="true"
                />
                <div className="min-w-0 flex-auto">
                  <h2 className="text-lg text-rose-900 font-semibold">
                    Informations Client
                  </h2>
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {person.parent.nom}
                  </p>
                  <p className="mt-1 font-semibold   text-sm leading-6 text-blue-950">
                    {person.parent.email}
                  </p>
                  <p className="mt-1 font-semibold  truncate text-sm leading-8 text-blue-950">
                    {person.parent.telephone}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-lg font-semibold  leading-6 text-blue-950">
                  Le : {new Date(person.date).toISOString().substr(0, 10)}
                </p>

                <p className="mt-1 text-lg font-semibold  leading-6 text-blue-950">
                  heure : {person.heure}
                </p>
                <p className="text-lg leading-6 font-semibold text-[#fb3f3f]">
                  <span className="text-blue-950">Creche : </span>
                  {person.creche.nomCreche}
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                className="text-sm rounded-md ring-2 ring-[#091098] px-4 py-1.5 bg-[#d81b1b] font-semibold leading-6 text-white hover:bg-[red] hover:scale-105 duration-100 "
              >
                <a>Refuser</a>
              </button>
              <button
                type="submit"
                className="rounded-md bg-[#1aea1a] px-3 py-2 text-sm font-semibold text-blue-950 shadow-sm hover:bg-[#28ff28] hover:scale-105 duration-100 ring-2 ring-[#091098] "
              >
                <a>Accepter</a>
              </button>
            </div>
          </li>
        ))}
      </ul>
  
    </>
  );
};

export default RdvProprio;
