import React, { useState, useEffect } from "react";
import axios from "axios";

function VehicleList() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchVehicles = async () => {
            const response = await axios.get("http://localhost:5000/api/vehicles");
            setVehicles(response.data);
        };
        fetchVehicles();
    }, []);
    
    return (
        <div>
          {vehicles.map(vehicle => (
            <div key={vehicle._id}>
              <p>{vehicle.plate}</p>
            </div>
          ))}
        </div>
      );
    }

export default VehicleList;