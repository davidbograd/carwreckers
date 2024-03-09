import CarwreckerCard from "./Components/CarwreckerCard";
import carwreckers from "./carwreckerData";

function App() {
  return (
    // Car wreckers section
    // space-x-8
    <div className="mx-auto max-w-7xl p-8">
      <nav>Carwreckers</nav>
      {/* Carwrecker overview section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {carwreckers.map((carwrecker, key) => {
          return (
            <CarwreckerCard
              key={key}
              wreckername={carwrecker.wreckername}
              address={carwrecker.address}
              email={carwrecker.email}
              phone={carwrecker.phone}
              website={carwrecker.website}
              url={carwrecker.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;