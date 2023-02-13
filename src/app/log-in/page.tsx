import React from "react";
import { Container } from "../../components/container";
import LoginForm from "../../components/LogInForm";

function LogIn() {
  return (
    <Container>
      <div className="flex min-h-screen translate-y-[-1rem] animate-fade-in flex-col items-center justify-center gap-3 py-2 opacity-0">
        <LoginForm />
      </div>
    </Container>
  );
}

export default LogIn;