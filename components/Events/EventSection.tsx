import React from "react";
import { EventsSection } from "../../types/Assemblies";
import EventCard from "./EventCard";

type Props = {
  section: EventsSection;
};

const EventSection = ({ section }: Props) => {
  return (
    <section className="section" id={section.slug}>
      <div className="container flex flex-col">
        {section.heading && <h2 className="h2">{section.heading}</h2>}
        {section.events ? (
          section.events.map((event, i) => <EventCard event={event} key={i} />)
        ) : (
          <p> Inga event att visa </p>
        )}
      </div>
    </section>
  );
};

export default EventSection;
