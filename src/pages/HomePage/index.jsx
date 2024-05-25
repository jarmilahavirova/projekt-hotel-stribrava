import { useState } from "react";
import { Banner } from "../../components/Banner";
import { Rooms } from "../../components/Rooms";
import "./style.css";
import { useEffect } from "react";
import { Contact } from "../../components/Contact";
import { RoomDetail } from "../../components/RoomDetail";

export const HomePage = () => {
  const [rooms, setRooms] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch("http://localhost:4000/api/rooms");
      const json = await response.json();
      setRooms(json.data);
    };

    fetchRooms();
  }, []);

  return (
    <>
      <Banner />
      <Rooms rooms={rooms} onSelect={setSelectedId} />
      {selectedId !== null && rooms !== null && (
        <RoomDetail room={rooms[selectedId]} />
      )}
      <Contact />
    </>
  );
};
