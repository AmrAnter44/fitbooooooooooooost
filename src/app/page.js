// Navbar.jsx
"use client";
import React from "react";
import Image from "next/image";
import Service from "./comp/Service";
import Secone from "./comp/secone";
import Nav from "./comp/Nav";
import Nav2 from "./comp/Nav2";
import Choose from "./comp/Choose";
import Resluts from "./comp/Resluts";
import Why from "./comp/Why";
export default function Navbar() {
  return <>
 <Nav></Nav>
 <Nav2></Nav2>
 <Secone></Secone>
 <Service></Service>
 <Choose></Choose>
 <Resluts></Resluts>
 <Why></Why>

  </>
}
