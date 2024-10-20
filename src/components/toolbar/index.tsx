import React from "react";
import Dropdown from "../dropdown";
import IconLoader from "../IconLoader";
import styles from "./toolbar.module.css";
import { ToolbarProps, ToolbarSchema } from "../../types/toolbar";

const Toolbar: React.FC<ToolbarProps> = ({
  schema = defaultToolbarSchema,
  handleToolbarItem,
}) => {
  return (
    <ul className={styles.toolbarWrapper}>
      {Object.entries(schema).map(([groupName, items]) => (
        <li key={groupName} className={styles.toolbarGroup}>
          {items.map((item) => (
            <React.Fragment key={item.value}>
              {item.type === "select" ? (
                <Dropdown
                  onChange={(value: string) => handleToolbarItem({ value })()}
                  options={item.options || []}
                />
              ) : item.type === "button" ? (
                <button
                  className={styles.toolbarButton}
                  onClick={handleToolbarItem(item)}
                  aria-label={item.value}
                >
                  <IconLoader iconName={item.value || ""} />
                </button>
              ) : null}
            </React.Fragment>
          ))}
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
        { label: "Heading 1", value: "heading1" },
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
    { type: "button", value: "blockquote" },
  ],
};

export default Toolbar;
