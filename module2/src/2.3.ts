{
    //generic type
    //reuseable type

    // type recursion
    //we can receive the generic type as a parameter
    type GenericArray<T> = T[]

    // const rollNumbers : number[] = [3,6,8]
    const rollNumbers : GenericArray<number> = [3,6,8]

    // const mentors : string[] = ['Joujoniki Asa Roy', 'Asa Roy', 'MirRoy']
    const mentors : GenericArray<string> = ['Joujoniki Asa Roy', 'Asa Roy', 'MirRoy']

    // const boolArray : boolean[] = [true, false, true]
    const boolArray : GenericArray<boolean> = [true, false, true]

    // generic object
    const user : GenericArray<{ name: string, age: number }> = [
        { name: 'Joujoniki Asa Roy', age: 21 },
        { name: 'Asa Roy', age: 21 },
        { name: 'MirRoy', age: 21 }
    ]

    //generic with type
    type User  = {
        name: string;
        age: number
    }

    //object
    const user1 : GenericArray<User> = [
        { name: 'Joujoniki Asa Roy', age: 21 },
        { name: 'Asa Roy', age: 21 },
        { name: 'MirRoy', age: 21 }
    ]

    //generic with interface
    interface User2  {
        name: string;
        age: number
    }

    const user2 :  GenericArray<User2> = [
        { name: 'Joujoniki Asa Roy', age: 21 },
        { name: 'Asa Roy', age: 21 },
        { name: 'MirRoy', age: 21 }
    ]

    
}