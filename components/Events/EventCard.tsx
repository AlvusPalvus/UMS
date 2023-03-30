import React from "react";
import { EventCard } from "../../types/Topics";

type Props = {
  event: EventCard;
};

const EventCard = ({ event }: Props) => {
  return (
    <div className="card">
      <h3>{event.heading}</h3>
    </div>
  );
};

export default EventCard;
