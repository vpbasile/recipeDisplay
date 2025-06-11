import { Box, Heading } from '@chakra-ui/react';
import { brownies } from './exampleRecipe';
import Section from './section';
import { Tamount, Tingredient } from './types';

export default function RecipeExample() {
    const recipe = brownies
    let keyGen = 0

    function displayAmounts(amounts: Tamount | Tamount[]): string {
        // Check if amount is an array
        if (Array.isArray(amounts)) return (amounts as Tamount[]).map((eachAmount) => `${eachAmount[0]} ${eachAmount[1]}`).join('/')
        else return `${(amounts as Tamount)[0]} ${(amounts as Tamount)[1]}`
    }

    function displayIngredient(ingredient: Tingredient) {
        const amountString = displayAmounts(ingredient.amount)
        return <li key={keyGen++}>
            {ingredient.ingredient} {ingredient.preparation} - {amountString}
        </li>
    }

    function listMiseEnPlace() {
        return <ol id='mise-en-place'>
            {
                recipe.miseEnPlace.map((item) => {
                    // Handle groups first
                    if ('title' in item) {
                        const group = item as { title: string, ingredients: Tingredient | Tingredient[] }
                        // Display the title then each of the ingredients
                        return <li key={keyGen++}>
                            <Heading as={'h3'}>{group.title}</Heading>
                            <ul>
                                {/* For groups with multiple ingredients, map over each ingredient and render it as a list item using displayIngredient.
                                This ensures all ingredients in the group are displayed in the list. */}
                                {Array.isArray(group.ingredients) ? group.ingredients.map((ingredient) => {
                                    return displayIngredient(ingredient)
                                }) : displayIngredient(group.ingredients)}
                            </ul>
                        </li>
                        // Handle single ingredients
                    } else {
                        const ingredient = item as Tingredient
                        return displayIngredient(ingredient)
                    }
                }
                )
            }

        </ol>
    }

    function listEquipment() {
        if (recipe.equipment) {
            return <ul id='equipment'>
                <h2>Equipment</h2>
                {
                    Array.isArray(recipe.equipment) ? recipe.equipment.map((item) => {
                        return (
                            <li key={keyGen++}>
                                {item}
                            </li>
                        )
                    }) : <li>{recipe.equipment}</li>
                }
            </ul>
        } else {
            return <></>
        }
    }

    function displayInstructions() {
        return <ol id='instructions'>
            <h2>Instructions</h2>
            {Array.isArray(recipe.instructions) ? recipe.instructions.map((instruction) => {
                return (
                    <li key={keyGen++}>
                        {instruction}
                    </li>
                )
            }) : <li>{recipe.instructions}</li>}
        </ol>
    }

    return <Box >
        <Box id='recipeHeader'>
            <Heading flex={3} as={'h1'}>{recipe.title}</Heading>
            {recipe.subtitle && recipe.subtitle}
        </Box>
        <Box id='recipeBody'>
            <Box id='prep'>
                <Section id='mep' title='Mise En Place'>{listMiseEnPlace()}</Section>
                <Section id='equipment' title='Equipment'>{listEquipment()}</Section>
            </Box>
            <Section id='act' title='Instructions'>{displayInstructions()}</Section>
        </Box>
    </Box   >

}