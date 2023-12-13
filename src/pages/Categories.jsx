import { useEffect, useState, useContext } from "react";
import DataContext from "../Utilities/DataContext";
import { BookCard } from "../components/Body/BookCard";

import { Divider } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Tag, HStack, SimpleGrid } from "@chakra-ui/react";




  

export const Categories = () => {
  const { books, setBooks } = useContext(DataContext);
  const fiction = [
    "Adventure",
    "Mystery",
    "Science Fiction",
    "Historical Fiction",
    "Fantasy",
    "Romance",
    "Horror",
  ];

  function handleSelectGenre() {
    // .filter((book) => book.sub_genre === fiction[index])
  }
  return (
    <>
      {/* // fiction */}
      <Heading>Fiction</Heading>
      <HStack spacing={4}>
        {fiction.map((g, index) => (
          <Tag key={fiction[index]} onClick={handleSelectGenre}>
            {fiction[index]}
          </Tag>
        ))}
      </HStack>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 6 }} spacing={5}>
        {books
          .filter((book) => book.genre === "Fiction")
          .map((book, index) => (
            <ul>
              <BookCard key={book.ISBN} {...book} />
            </ul>
          ))}
      </SimpleGrid>
      <Divider />

      <Heading>Adventure</Heading>
      {books
        .filter((book) => book.genre === "Adventure")
        .map((book, index) => (
          <ul>
            <h1>{book.title}</h1>
          </ul>
        ))}
      <Divider />
      <Heading>Mystery</Heading>
      {books
        .filter((book) => book.genre === "mystery")
        .map((book, index) => (
          <ul>
            <h1>{book.title}</h1>
          </ul>
        ))}
      <Divider />
      <Heading>Crime</Heading>
      {books
        .filter((book) => book.genre === "Crime")
        .map((book, index) => (
          <ul>
            <BookCard key={book.ISBN} {...book} />
          </ul>
        ))}
      <Divider />
      <Heading>Crime</Heading>

      {books
        .filter((book) => book.genre === "Crime")
        .map((book, index) => (
          <ul>
            <h1>{book.title}</h1>
          </ul>
        ))}
    </>
  );
};
