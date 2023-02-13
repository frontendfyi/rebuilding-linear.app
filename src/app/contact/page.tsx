import React from "react";
import { Container } from "../../components/container";
import ContactForm from "../../components/ContactForm";
import Head from "next/head";
import Script from "next/script";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <ContactForm />
      </Container>
    </>
  );
}
