import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import React from 'react';
import { Action } from '../../pages/[slug]';

const ActionsCell = ({setAction, ...rest}) => {
  return (
    <Flex alignItems={"center"} gap={"0.5rem"}>
       <IconButton size={"sm"} icon={<ViewIcon/>}/>
       <IconButton size={"sm"}onClick={() => setAction({type: "EDIT", payload: {}})}  icon={<EditIcon/>}/>
       <IconButton size={"sm"} icon={<DeleteIcon/>}/>
    </Flex>
  )
};

export default ActionsCell;