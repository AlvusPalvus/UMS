import Column from "./Column";
import { Column as ColumnType } from "../types/Assemblies";
import { Section as SectionType } from "../types/Assemblies";
import Slider from "./News/Slider";
import EventSection from "./Events/EventSection";

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

type Props = {
  section: SectionType;
};

const Section = ({ section }: Props) => {
  switch (section.type) {
    case "newsSection":
      return <Slider section={section} />;
    case "section":
      return (
        <section
          //style={{ backgroundColor: "#" + section.backgroundColor }}
          className="container section"
          id={section.slug}
        >
          {section.heading && <h2 className="h2">{section.heading}</h2>}

          <div
            className={
              section.columns
                ? "grid grid-flow-row-dense grid-cols-" +
                  section.columns.length.toString()
                : "even-columns"
            }
          >
            {setUpColumns(section.columns)}
          </div>
        </section>
      );
    case "eventsSection":
      return <EventSection section={section} />;

    default:
      break;
  }
};

export default Section;
