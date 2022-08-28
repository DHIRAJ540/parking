import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "./Home.css";
import car1 from "../assets/car1.svg";
import car2 from "../assets/car2.svg";
import car3 from "../assets/car4.svg";
import car4 from "../assets/car5.svg";
import car5 from "../assets/car6.svg";
import car6 from "../assets/car7.svg";
import car7 from "../assets/car8.svg";

const CarCard = ({ item, carType, handleCheckOut }) => {
  return (
    <div className="card">
      <div>
        <h4>{item.driverName}</h4>
        <h2>{item.carNumber}</h2>
        <p>Time: {item.entryTime}</p>
        <p>Date: {item.entryDate}</p>
        <button onClick={() => handleCheckOut(item)}>Check out</button>
      </div>
      <div>
        <img src={carType} alt="car" />
      </div>
    </div>
  );
};

const HistoryCard = ({ item, carType }) => {
  return (
    <div className="card">
      <div>
        <h4>{item.driverName}</h4>
        <h2>{item.carNumber}</h2>
        <div className="time_details">
          <div>
            <h6>Check in time</h6>
            <p>Time: {item.entryTime}</p>
            <p>Date: {item.entryDate}</p>
          </div>
          <div>
            {" "}
            <h6>Check out time</h6>
            <p>Time: {item.checkOutTime}</p>
            <p>Date: {item.checkOutDate}</p>
          </div>
        </div>
      </div>
      <div>
        <img src={carType} alt="car" />
      </div>
    </div>
  );
};

const Home = () => {
  const date = new Date();
  const today = date.toLocaleDateString();
  const time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  const [cars, setCars] = useState([
    {
      carNumber: "OD073414",
      driverName: "Dhiraj",
      carType: 1,
      entryTime: time,
      entryDate: today,
    },
  ]);
  const [driverName, setDriverName] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [carType, setCarType] = useState(1);
  const [history, setHistory] = useState([]);

  const carLogos = [car1, car2, car3, car4, car5, car6, car7];

  const handleSubmit = () => {
    const date = new Date();
    const today = date.toLocaleDateString();
    const time =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.log("hi");
    const data = {
      carNumber,
      driverName,
      entryTime: time,
      entryDate: today,
      carType,
    };

    setCars([...cars, data]);

    setDriverName("");
    setCarNumber("");
    setCarType(1);
  };

  const handleCheckOut = (car) => {
    const date = new Date();
    const today = date.toLocaleDateString();
    const time =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    const data = { ...car, checkOutDate: today, checkOutTime: time };
    const carData = cars.filter((item) => item.carNumber !== car.carNumber);
    setCars(carData);
    setHistory([...history, data]);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="home">
          <div className="form">
            <form className="input_form">
              <div>
                <div className="inputs">
                  <label htmlFor="number">Car number</label>
                  <input
                    type="text"
                    name="number"
                    required
                    value={carNumber}
                    onChange={(e) => setCarNumber(e.target.value)}
                  />
                </div>
                <div className="inputs">
                  <label htmlFor="name">Driver name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={driverName}
                    onChange={(e) => setDriverName(e.target.value)}
                  />
                </div>

                <label>Car type</label>
                <div className="type_container">
                  {carLogos.map((item, index) => (
                    <div className="car_type" onClick={() => setCarType(index)}>
                      <img src={item} alt="car" key={index} />
                    </div>
                  ))}
                </div>
              </div>
            </form>
            <button onClick={() => handleSubmit()}>Check in</button>
          </div>
          <div>
            <h1>Total cars: {cars.length}</h1>
          </div>
        </div>
        <div className="main">
          <h3>Cars in garage</h3>
          <div className="cars_container">
            {cars.map((item, index) => (
              <CarCard
                key={index}
                item={item}
                carType={carLogos[item.carType]}
                handleCheckOut={handleCheckOut}
              />
            ))}
          </div>
          <h3>Record</h3>
          <div className="cars_container">
            {history.map((item, index) => (
              <HistoryCard
                key={index}
                item={item}
                carType={carLogos[item.carType]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
