export type Tamount = [number, string]

export type Tingredient = {
    ingredient: string, preparation: string, amount: Tamount | Tamount[]
}

export type Tequipment = string

export type Tgroup = {
    title: string,
    ingredients: Tingredient | Tingredient[]
}

// TODO add a time estimate to the recipe
export type Trecipe = {
    title: string,
    subtitle: string | null,
    miseEnPlace: (Tingredient | Tgroup)[]
    equipment?: Tequipment | Tequipment[]
    instructions: string | string[]
}