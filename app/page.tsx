import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars(); // komanda kako bi mogli da koristimo API koji smo napravili u folder utils //

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars; // ako je bilo sta od ovoga tacno data je prazno //

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl">Car Catalogue</h1>
          <p className="">Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map(
                (
                  car // mapiramo kroz cars, gdje za svaki car prikazujemo CarCard komponentu koja ima car data //
                ) => (
                  <CarCard car={car} />
                )
              )}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Ooops no results.</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
