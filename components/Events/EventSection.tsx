import React from "react";
import { EventsSection } from "../../types/Assemblies";
import EventCard from "./EventCard";

type Props = {
  section: EventsSection;
};

const EventSection = ({ section }: Props) => {
  return (
    <section className="section">
      <div className="container">
        <h2>{section.heading}</h2>
        {section.events.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>
    </section>
  );
};

export default EventSection;
