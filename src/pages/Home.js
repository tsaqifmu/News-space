// import { useEffect, useState } from "react";
// import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import Head from "../component/Head.jsx";
import Articles from "../component/Articles.jsx";

export default function Home() {
  return (
    <>
      <Head />
      <main className="flex w-full justify-center py-5">
        <Articles />
      </main>
    </>
  );
}
