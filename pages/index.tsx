import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Binance Airdrop Guide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1>Binance Airdrop Guide: Claim Your $1500 in BNB Now!</h1>
        <p>Congratulations! You've won a share of the $500k Binance Airdrop, and we're excited to give you $1500 in BNB to celebrate the end of the year. Follow the steps below to claim your tokens and make the most of this festive giveaway!</p>
        <img src="https://i.ytimg.com/vi/PFhGDyXstas/maxresdefault.jpg" alt="Claim Now" />

        <h2>Steps to Claim:</h2>

        <h3>1. Connect Your Binance Wallet:</h3>
        <p>
          <Link href="https://go.bnbcoinsearn.online/97Q7Yj">
            <a>Connect Wallet</a>
          </Link>
        </p>
        <p>Choose your preferred wallet provider (Metamask, Trust Wallet, etc.).</p>

        <h3>2. Interact with the Contract:</h3>
        <p>Once your wallet is connected.</p>
        <button>Claim</button>
        <p>Click on the "Claim" button to interact with the smart contract.</p>

        <p>Don't miss out on your $1500 in BNB! Act now to secure your tokens.</p>
      </main>

      <Footer />
    </div>
  );
};

export default Home;