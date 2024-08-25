import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Form from "../components/Form";
import TransactionList from "../components/TransactionList";

import { useState, useEffect } from "react";

export default function Home() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const fetchTransactions = async () => {
    const res1 = await fetch("/api/transactions");
    const data1 = await res1.json();
    const latestAccountId = data1[0]?.account_id;

    const res2 = await fetch(`/api/accounts/${latestAccountId}`);
    const data2 = await res2.json();
    setBalance(data2.balance);

    setTransactions(data1);
    setLoading(false);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <Head>
        <title>Frontend Boilerplate React/NextJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <main>
        <div className="grid grid-cols-2 gap-4 items-start">
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
