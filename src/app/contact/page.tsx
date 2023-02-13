import { Container } from "../../components/container";
import ContactForm from "../../components/ContactForm";
<<<<<<< HEAD
import Head from "next/head";
import supabase from "@/utils/supabase";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <ContactForm supabase={supabase} props={undefined} />
      </Container>
    </>
=======

export default function Contact() {
  return (
    <Container>
      <ContactForm />
      <h1 className="text-center text-lg">
        Direct Support Line: 020 4538 5045
      </h1>
    </Container>
>>>>>>> parent of 1e02a34 (fixing contact form flow)
  );
}
