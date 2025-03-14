import { HStack, List, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GenreListSkeleton = () => {
  return (
    <List.Root listStyle={'none'}>
        <HStack>
            <Skeleton height={'50px'}/>
            <SkeletonText noOfLines={2}/>
        </HStack>
    </List.Root>
  )
}

export default GenreListSkeleton