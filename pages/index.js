import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import App from "../src/components/App";

export default function Home(props) {
  return <App />;
}
