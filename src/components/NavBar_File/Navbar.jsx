import { NavLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Flex, Spacer, Heading, ButtonGroup, Button } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import { useState } from "react";
export const Navbar = () => {
  const [user, setUser] = useState(false);
  return (
    <>
      <Box bg="grey" w="100%" p={4} color="black">
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading size="md">The Library</Heading>
          </Box>
          <Spacer />
          <Box p="2">
            <Heading size="md">
              <NavLink to={"/"}>Home</NavLink>
            </Heading>
          </Box>
          <Box p="2">
            <Heading size="md">
              <NavLink to={"/categories"}>Categories</NavLink>
            </Heading>
          </Box>
          <Box p="2">
            <Heading size="md">
              <NavLink to={"/mybooks"}>My Books</NavLink>
            </Heading>
          </Box>

          <Spacer />

          {/* user */}
          <Menu>
            <MenuButton as={Button} colorScheme="grey">
              <AvatarGroup spacing="1rem">
                
                <Avatar bg="teal.500" />
              </AvatarGroup>
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                {user ? (
                  <MenuItem>My Account</MenuItem>
                ) : (
                  <MenuItem>Admin</MenuItem>
                )}
                <MenuItem>Payments </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>FAQ</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </>
  );
};
