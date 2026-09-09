import { Box, Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedSortOrder: (order: string) => void;
  selectedSortOrder: string | null;
}

const sortOrders = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date Added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release Date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average Rating" },
];

const SortSelector = ({ onSelectedSortOrder, selectedSortOrder }: Props) => {
  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder,
  );

  return (
    <Box>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline" size="sm">
            Order by: {currentSortOrder?.label || "Relevance"} <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {sortOrders.map((order) => (
                <Menu.Item
                  key={order.value}
                  value={order.value}
                  onClick={() => onSelectedSortOrder(order.value)}
                >
                  {order.label}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Box>
  );
};

export default SortSelector;
