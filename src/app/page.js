"use client";
import React from "react";
import dynamic from 'next/dynamic';

// Static imports للمكونات المهمة Above the fold
import Nav from "./comp/Nav";
import Nav2 from "./comp/Nav2";
import Secone from "./comp/secone";
import Service from "./comp/Service";

// Dynamic imports للمكونات Below the fold
const Choose = dynamic(() => import("./comp/Choose"));
const Resluts = dynamic(() => import("./comp/Resluts"));
const Cta = dynamic(() => import("./comp/Cta"));

export default function HomePage() {
  return (
    <>
      <Nav />
      <Nav2 />
      <Secone />
      <Service />
      <Choose />
      <Resluts />
      <Cta />
    </>
  );
}