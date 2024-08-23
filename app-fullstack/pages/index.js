import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Tile from "../components/Tile";
import Form from "../components/Form";
import TransactionList from "../components/TransactionList";

import { useState, useEffect } from "react";

export default function Home() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const fetchTransactions = () => {
    fetch("/api/transactions")
      .then((res) => res.json())
      .then((data) => {
        const latestAccountId = data[0]?.account_id;

        fetch(`/api/accounts/${latestAccountId}`)
          .then((res) => res.json())
          .then((dat) => {
            setBalance(dat.balance);
          });

        setTransactions(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Frontend Boilerplate React/NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Hero />
        <Tile />
        <Form
          fetchTransactions={fetchTransactions}
          setTransactions={setTransactions}
          setLoading={setLoading}
        />

        <TransactionList
          data={transactions}
          balance={balance}
          isLoading={isLoading}
        />
      </main>
      <Footer />
    </div>
  );
}
