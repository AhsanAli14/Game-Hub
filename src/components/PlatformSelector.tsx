import { Box, Button, Menu, MenuItem, Portal } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGame";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Box>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            {selectedPlatform?.name || "Platforms"}
            <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {data.map((platform) => (
                <Menu.Item
                  key={platform.id}
                  value={platform.id.toString()}
                  onClick={() => onSelectPlatform(platform)}
                >
                  {platform.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default PlatformSelector;
