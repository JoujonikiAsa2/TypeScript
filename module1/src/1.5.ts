{// Reference types

    // object (implicit)
    let user = {
        name: "Joujoniki Asa Roy",
        age: 21
    };

    // explicit
    let userInfo: {
        university: "Daffodil International University"; //when a value works as type then it called literal type
        name: string;
        age: number;
        isMarried?: boolean; // optional type
    } = {
        university: "Daffodil International University",
        name: "Joujoniki Asa Roy",
        age: 21
    }

    console.log(userInfo);

}