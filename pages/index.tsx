import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import styles from "../styles/Home.module.css";
import { analyze } from "./analyze";
import { isNotEmpty } from "./is-not-empty";

const Home: NextPage = function () {
  const inputElement = useRef<HTMLInputElement>(null);

  inputElement;

  async function onAnalyze() {
    let headline = inputElement.current?.value;
    if (isNotEmpty(headline)) {
      const analytics = await analyze(headline);
      console.log(analytics);
    } else {
      alert("please enter a valid headline");
    }
  }

  return (
    <>
      <Head>
        <title>Headline Analyze</title>
      </Head>

      <header></header>

      <main>
        <div>
          <label htmlFor="headline-input">Paste your Headline here</label>
          <input ref={inputElement} type="text" id="headline-input" />
          <button onClick={onAnalyze}>Analyze Headline</button>
        </div>
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
