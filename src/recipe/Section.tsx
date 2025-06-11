import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';
export default function Section(props: { id: string; title: string; children: ReactNode }) {
    return (<Box id={props.id} p={3} 
    // border={'1px solid black'}
    >
        <Heading as='h2'>{props.title}</Heading>
        {props.children}
    </Box>)
}