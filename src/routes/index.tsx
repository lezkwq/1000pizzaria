import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About, Footer, Header, Menu, MobileCta, Reviews, Visit } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "1910 Pizzaria" },
      { property: "og:title", content: "1910 Pizzaria" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
