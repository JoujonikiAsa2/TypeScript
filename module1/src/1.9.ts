{
    // type alias
    type Student = {
        name: string,
        age: number,
        isMarried?: boolean,
        gender?: string,
        address?: string,
        roll?: number
        contact: string
    };

    const student1: Student= {
        name: "Joujoniki Asa Roy",
        age: 21,
        isMarried: true,
        gender: "Male",
        address: "Dhaka",
        roll: 10,
        contact: "01712345678"
    };

    const student2: Student= {
        name: "Asa Roy",
        age: 21,
        isMarried: true,
        contact: "01712345678"
    };

    console.log(student1)

    type UserName = string;
    type UserAge = number;

    const userName: UserName = "Joujoniki Asa Roy";
    const userAge: UserAge = 21;


    // at function
    type Add = (a: number, b: number) => number;

    const add: Add = (num1, num2) => num1 + num2
}