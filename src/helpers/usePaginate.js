import { useSelector } from "react-redux";
import { selectPage } from "../features/pages/pageSlice";
import { selectSizepages } from "../features/sizepages/sizepagesSlice";

export function usePaginate(movies) {
  const page = useSelector((state) => selectPage(state));
  const sizepages = useSelector((state) => selectSizepages(state));

  const firstElementIndex = Math.min((page - 1) * sizepages, movies.length);
  const lastElementIndex = Math.min(page * sizepages, movies.length);

  const visibleMovies = movies.slice(firstElementIndex, lastElementIndex);
  const numberPages = Math.max(Math.ceil(movies.length / sizepages), 1);
  return { firstElementIndex, lastElementIndex, numberPages, visibleMovies };
}
