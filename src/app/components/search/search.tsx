import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";

interface SearchProps {
  placeholder: string;
}

const Search: React.FC<SearchProps> = ({ placeholder }) => {
  return (
    <div className={styles.search}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
};
export default Search;
