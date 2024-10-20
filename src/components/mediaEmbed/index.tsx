import useElementToggle from "../../hooks/useElementToggle";
import IconLoader from "../IconLoader";
import PlusIcon from "../vectors/plus";
import styles from "./mediaEmbed.module.css";

interface MediaEmbedOption {
  iconName: string;
  title: string;
  description: string;
}

const MediaEmbed = ({
  onClickHandler,
}: {
  onClickHandler: (p: string) => void;
}) => {
  console.log(onClickHandler);
  const { dropdownRef, isOpen, toggleIsOpenHandler, closeHandler } =
    useElementToggle();

  return (
    <div className={styles.mediaEmbed} ref={dropdownRef}>
      <button
        type="button"
        className={styles.toggleButton}
        onClick={toggleIsOpenHandler}
        aria-label="Toggle Media Embed Menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <PlusIcon />
      </button>
      {
        <div data-isopen={isOpen} className={styles.menu} role="menu">
          <div className={styles.menuHeader}>Embeds</div>
          <ul className={styles.menuList} role="menu">
            {options?.map((option) => (
              <li
                key={option.title}
                className={styles.menuItem}
                onClick={() => {
                  onClickHandler?.(option.title);
                  closeHandler?.();
                }}
                role="menuitem"
                tabIndex={0}
              >
                <aside className={styles.menuItemIcon}>
                  <IconLoader iconName={option.iconName} />
                </aside>
                <div className={styles.menuItemContent}>
                  <span className={styles.menuItemTitle}>{option.title}</span>
                  <span className={styles.menuItemDescription}>
                    {option.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
};

const options: MediaEmbedOption[] = [
  {
    iconName: "image",
    title: "Picture",
    description: "Jpeg, png",
  },
  {
    iconName: "image",
    title: "Video",
    description: "Embed a YouTube video",
  },
  {
    iconName: "image",
    title: "Social",
    description: "Embed a Facebook link",
  },
];
export default MediaEmbed;
