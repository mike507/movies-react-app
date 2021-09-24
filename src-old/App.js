import React, {useEffect, useState} from 'react';
import {movies$} from './movies';
import {Container, Row} from 'react-bootstrap';
import MovieCard from "./components/MovieCard";
import {CATEGORY_ALL, ELEMENTS, FIRST_PAGE } from './helpers/constants';
import usePaginate from "./helpers/usePaginate";
import SelectCategory from "./components/SelectCategory";
import FormPagination from "./components/FormPagination";
import {calcNbPages} from "./helpers/calcNbPages";
import { withAuthenticator} from '@aws-amplify/ui-react'

const App = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        movies$.then(res => {
            setLoading(false);
            setMovies(res);
        })
    }, []);

    const [category, setCategory] = useState(CATEGORY_ALL);
    const [page, setPage] = useState(FIRST_PAGE);
    const [nbElementsParPage, setNbElementsParPage] = useState(ELEMENTS[0]);

    const [categories, setCategories] = useState([]);
    const [categoryMovies, setCategoryMovies] = useState([]);

    useEffect(() => {
        const updatedCategories = [
            CATEGORY_ALL,
            ...new Set(movies.filter(elem => !elem.isDeleted).map(elem => elem.category))];
        const updatedCategoryMovies = movies.filter(movie => !movie.isDeleted &&
            (category === CATEGORY_ALL ? true : category === movie.category))
        if (updatedCategories.indexOf(category) === -1)
        {
            setCategory(CATEGORY_ALL);
        }
        const nbPages = calcNbPages(updatedCategoryMovies.length, nbElementsParPage);

        setCategories( updatedCategories);
        setCategoryMovies(updatedCategoryMovies);

        if(page > nbPages)
        {
            setPage(Math.max(nbPages, FIRST_PAGE));
        }
    }, [movies, category, nbElementsParPage, page]);

    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    }

    const handleChangeNbElementsParPage = (event) => {
        setNbElementsParPage(event.target.value);
     }

    const onDelete = (id) => {
        const index = movies.findIndex(movie => movie.id === id);
        const updatedMovies = [...movies.slice(0, index),
            Object.assign({...movies[index]}, {isDeleted: true}),
            ...movies.slice(index + 1, movies.length)];
        setMovies(updatedMovies);
    }

    const onLike = (id) => {
        const index = movies.findIndex(movie => movie.id === id);
        const {likes, isLiked} = movies[index];
        setMovies(
            [...movies.slice(0, index),
                Object.assign({...movies[index]}, {likes: isLiked ? likes - 1 : likes + 1, isLiked: !isLiked}),
                ...movies.slice(index + 1, movies.length)]);
    }

    const onDislike = (id) => {
        const index = movies.findIndex(movie => movie.id === id);
        const {dislikes, isDisliked} = movies[index];
        setMovies(
            [...movies.slice(0, index),
                Object.assign({...movies[index]}, {
                    dislikes: isDisliked ? dislikes - 1 : dislikes + 1,
                    isDisliked: !isDisliked
                }),
                ...movies.slice(index + 1, movies.length)]);
    }

    const handlePrevious = () => {
        setPage(Math.max(FIRST_PAGE, page-1));
    }

    const handleNext = () => {
        const nbPages = calcNbPages(categoryMovies.length, nbElementsParPage);
        setPage(Math.min(nbPages, page+1));
    }

    const {
        firstElementIndex,
        lastElementIndex,
        visibleMovies
    } = usePaginate(page, nbElementsParPage, categoryMovies);

    if (loading) {
        return (
            <h1>Loading ...</h1>
        );
    }
    return (
        <Container fluid>
            <Row className="my-1">
                <SelectCategory categories={categories} handleChangeCategory={handleChangeCategory} />
                <FormPagination page={page} firstElementIndex={firstElementIndex} lastElementIndex={lastElementIndex}
                                nbElements={categoryMovies.length} handleChangeNbElements={handleChangeNbElementsParPage}
                                handleNext={handleNext} handlePrevious={handlePrevious} />
            </Row>
            <Row className="justify-content-md-left">
                {visibleMovies.map(movie =>
                    <MovieCard key={movie.id}
                               {...movie}
                               onDelete={onDelete}
                               onLike={onLike}
                               onDislike={onDislike}
                    />
                )}
            </Row>
        </Container>
    );
}

export default withAuthenticator(App);

