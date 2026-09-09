import { Card, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)}/>
      <Card.Body>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map((p)=> p.platform)}/>
          {game.metacritic && <CriticScore score={game.metacritic} />}
        </HStack>
        <Heading textStyle={'3xl'}>{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
};
