import React from "react";
import Dropdown from "../dropdown";
import IconLoader from "../IconLoader";
import styles from "./toolbar.module.css";
import { ToolbarProps, ToolbarSchema } from "../../types/toolbar";

const Toolbar: React.FC<ToolbarProps> = ({ schema = defaultToolbarSchema }) => {
  return (
    <ul className={styles.toolbarWrapper}>
      {Object.entries(schema).map(([groupName, items]) => (
        <li key={groupName} className={styles.toolbarGroup}>
          {items.map((item) => {
            switch (item.type) {
              case "select":
                return (
                  <Dropdown key={item.value} options={item.options || []} />
                );
              case "button":
                return (
                  <button key={item.value} className={styles.toolbarButton}>
                    <IconLoader iconName={item.value || ""} />
                  </button>
                );
              default:
                return null;
            }
          })}
        </li>
      ))}
    </ul>
  );
};

const defaultToolbarSchema: ToolbarSchema = {
  typography: [
    {
      type: "select",
      options: [
        { label: "Paragraph", value: "paragraph" },
        { label: "Heading 1", value: "heading1" }, // Changed to camelCase
      ],
    },
  ],
  assets: [
    { type: "button", value: "link" },
    { type: "button", value: "image" },
  ],
  formatting: [
    { type: "button", value: "bold" },
    { type: "button", value: "italic" },
  ],
  alignment: [
    { type: "button", value: "alignLeft" },
    { type: "button", value: "alignRight" },
    { type: "button", value: "alignCenter" },
  ],
  listing: [
    { type: "button", value: "bulletPoint" },
    { type: "button", value: "numbering" },
    { type: "button", value: "quote" },
  ],
};

export default Toolbar;
