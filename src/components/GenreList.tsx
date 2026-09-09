import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const genreListSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  if (error) return null;
  //   if(isLoading) return <Spinner />

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>Genres</Heading>
      <List.Root listStyle={"none"}>
        {isLoading &&
          genreListSkeleton.map((genre) => <GenreListSkeleton key={genre} />)}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                borderRadius={8}
                boxSize="32px"
                objectFit='cover'
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => {
                  onSelectGenre(genre);
                }}
                variant={"ghost"}
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
