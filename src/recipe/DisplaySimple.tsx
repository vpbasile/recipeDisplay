import { Box, Heading } from '@chakra-ui/react';
import { stew } from './peanutstew';
import Section from './section';
import { simpleRecipe } from './types';

export default function DisplaySimple() {
    const recipe: simpleRecipe = stew
    let sectionID = 0
    return (<Box>
        <Box >
            <Box id='recipeHeader'>
                <Heading flex={3} as={'h1'}>{recipe.title}</Heading>
                {recipe.subtitle && recipe.subtitle}
            </Box>
            <Box id='recipeBody'>
                {recipe.sections.map(eachSection => <Section id={`${sectionID++}`} title={eachSection.title} >
                    <ul>
                        {eachSection.list.map(eachItem => <li>{eachItem}</li>)}
                    </ul>
                </Section>
                )}
            </Box>
        </Box   >
    </Box>)
}