export type nameType = { name: string };
export type IState = { 
    people: { 
        name: string, 
        age: number, 
        url: string
        note?: string
    }[]
}