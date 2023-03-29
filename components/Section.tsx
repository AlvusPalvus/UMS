import Column from "./Column";
import { Column as ColumnType } from "../types/Assemblies";
import { Section as SectionType } from "../types/Assemblies";
import Slider from "./News/Slider";

// A section can have 1-3 columns.
const setUpColumns = (columns: ColumnType[]) => {
  // for each column create a column component
  // with grid style depending on number of columns

  if (columns == null) {
    return null;
  } else
    return (
      <div className=" even-columns">
        {columns.map((column, i) => (
          <Column column={column} key={i} />
        ))}
      </div>
    );
};

type Props = {
  section: SectionType;
};

const Section = ({ section }: Props) => {
  if (section.type === "newsSection") {
    return <Slider section={section} />;
  } else if (section.type === "section") {
    return (
      <section
        //style={{ backgroundColor: "#" + section.backgroundColor }}
        className="container section"
        id={section.slug}
      >
        {section.heading ? <h2 className="h2">{section.heading}</h2> : null}
        <div className="">{setUpColumns(section.columns)}</div>
      </section>
    );
  }
};

export default Section;
