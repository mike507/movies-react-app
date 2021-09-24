import {FIRST_PAGE} from "./constants";

export const calcNbPages = (nbElements, nbElementsParPage) => nbElementsParPage === 0 ? 1 :
    Math.max(Math.ceil(nbElements / nbElementsParPage), FIRST_PAGE);

