{
    // type alias
    type User1 = {
        name: string;
        age: number;
    }

    // EXTEND PROPERTY USING INTERSECTION
    type UserRole = User1 & { userRole: string }

    const user: UserRole = {
        name: "Joujoniki Asa Roy",
        age: 21,
        userRole: "Admin"
    }


    // we can use interface as well
    interface User2 {
        name: string;
        age: number;
    }

    interface UserWithRole2 extends User1 {
        userRole: string;
    }

    const user1: User2 = {
        name: "Joujoniki Asa Roy",
        age: 21
    }

    const user2: UserWithRole2 = {
        name: "Joujoniki Asa Roy",
        age: 21,
        userRole: "Admin"
    }



    // difference between type and interface
    // can not use interface with primitive type
    // can use alias with primitive and non primitive type 

    // array
type Roll1 = number[];

// interface
interface Roll2 {
    [index: number]: number
}
const roll1: Roll1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//type
type Add = (num1: number, num2: number) => number

// interface
interface Add1 {
    (num1: number, num2: number): number
}
const add: Add = (num1, num2) => num1 + num2

}