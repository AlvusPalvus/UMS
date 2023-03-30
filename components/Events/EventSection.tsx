import React from "react";
import { EventsSection } from "../../types/Assemblies";

type Props = {
  section: EventsSection;
};

const EventSection = ({ section }: Props) => {
  return (
    <div>
      EventSection
      <h2>{section.heading}</h2>
    </div>
  );
};

export default EventSection;
