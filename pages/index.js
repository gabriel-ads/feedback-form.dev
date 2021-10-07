import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Form from "../components/Form";

export default function Home() {
  const StyledDivModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: auto;
    background-color: ${({ theme }) => theme.colors.dark_light};
  `;
  return (
    <>
      <Head>
        <title>Feedback | Serasa</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Aqui é o lugar ideal para você deixar seu comentário e nota sobre nossos produtos e atendimentos para que nossa evolução seja contínua. Acesse e confira!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="twitter:title"
          content="Deixe seu feedback sobre nossos produtos | Serasa"
        />
        <meta
          name="twitter:description"
          content="Aqui é o lugar ideal para você deixar seu comentário e nota sobre nossos produtos e atendimentos para que nossa evolução seja contínua. Acesse e confira!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/serasa-logo.jpg" />
        <meta name="twitter:url" content="https://feedback.serasa.dev/" />
        <meta
          property="og:title"
          content="Deixe seu feedback sobre nossos produtos | Serasa"
        />
        <meta
          property="og:description"
          content="Aqui é o lugar ideal para você deixar seu comentário e nota sobre nossos produtos e atendimentos para que nossa evolução seja contínua. Acesse e confira!"
        />
        <meta property="og:url" content="https://feedback.serasa.dev/" />
        <meta property="og:image" content="/serasa-logo.jpg" />
        <meta
          property="og:site_name"
          content="Serasa Limpa Nome - Agora dá para ter crédito de novo."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/serasa-logo.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Serasa" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link crossorigin rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <StyledDivModal>
          <Form />
        </StyledDivModal>
      </main>
    </>
  );
}
