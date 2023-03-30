import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Field } from "../types/Topics";

const options = {
  renderNode: {
    paragraph: (node, children) => <p className="fs-body">{children}</p>,
    "heading-1": (node, children) => (
      <h1 className="fs-primary-heading">{children}</h1>
    ),
  },
};

type Props = {
  component: Field;
};

const PlainText = ({ component }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className="h3">{component.heading}</h3>
      <div className="link">
        {documentToReactComponents(component.body, options)}
      </div>
      <div>
        {component.buttons &&
          component.buttons.map((button, i) => (
            <Link href={button.link} className="button" key={i}>
              {button.text}
            </Link>
          ))}
      </div>
      <div>
        {component.assets && component.assets.map((doc) => <p>{doc}</p>)}
      </div>
    </div>
  );
};

export default PlainText;
