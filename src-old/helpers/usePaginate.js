import {useEffect, useState} from "react";
import {ELEMENTS} from "./constants";

const usePaginate = (desiredPage, nbElementsParPage, movies) => {
    const [firstElementIndex, setFirstElementIndex] = useState(0);
    const [lastElementIndex, setLastElementIndex] = useState(ELEMENTS[0]);

    useEffect(() => {
        const nbElements = movies.length;
        const firstElementIndex = Math.min((desiredPage - 1) * nbElementsParPage, nbElements);
        const lastElementIndex = Math.min(desiredPage * nbElementsParPage, nbElements);

        setFirstElementIndex(firstElementIndex);
        setLastElementIndex(lastElementIndex);
    }, [desiredPage, nbElementsParPage, movies]);

    return {firstElementIndex, lastElementIndex, visibleMovies: movies.slice(firstElementIndex, lastElementIndex)};
}

export default usePaginate;