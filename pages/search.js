import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import React from "react";
import { format } from "date-fns";
import { InfoCard } from "@/components/InfoCard";
import {Maps } from "@/components/Map";
// import '../styles/globals.css'
const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuest } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate}- ${formattedEndDate}`;
  console.log(router.query);
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest} guests`} />
      <main className="flex" style={{ marginTop: "80px" }}>
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays -{range} for {noOfGuest} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap md:space-x-3 md:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Places</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filter</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Maps searchResults={searchResults}/>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
