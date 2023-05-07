import Column from "./Column";
import {
  Column as ColumnType,
  EventsSection,
  StandardSection,
} from "../types/Assemblies";
import { Section as SectionType } from "../types/Assemblies";
import NewsSection from "./News/NewsSection";
import EventSection from "./Events/EventSection";

type Props = {
  section: SectionType;
};

const Section = ({ section }: Props) => {
  switch (section.type) {
    case "newsSection":
      return <NewsSection section={section} key={section.slug} />;
    case "section":
      return getSection(section);
    case "eventsSection":
      return (
        <EventSection section={section as EventsSection} key={section.slug} />
      );
    default:
      console.error("unknown section type");
      break;
  }
};

export default Section;

const getSection = (section: StandardSection) => {
  const nrColumns = section.columns ? section.columns.length : 0;
  let sectionLayout = "sectionLayout ";
  if (nrColumns === 2) {
    sectionLayout = "sectionLayout2 ";
  }
  if (nrColumns === 3) {
    sectionLayout = "sectionLayout3 ";
  }
  if (nrColumns > 3) {
    sectionLayout = "even-columns ";
  }

  return (
    <section
      //style={{ backgroundColor: "#" + section.backgroundColor }}
      className="container section"
      id={section.slug}
      key={section.slug}
    >
      {section.heading && <h2 className="h2">{section.heading}</h2>}

      <div className={sectionLayout}>{setUpColumns(section.columns)}</div>
    </section>
  );
};

// A section can have 1-3 columns.
const setUpColumns = (columns: ColumnType[]) => {
  // for each column create a column component
  // with grid style depending on number of columns

  if (columns == null) {
    return null;
  } else
    return (
      <>
        {columns.map((column, i) => (
          <Column column={column} key={i} />
        ))}
      </>
    );
};
