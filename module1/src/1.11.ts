{
    // ternary operator || optional chaining || nullish coalescing
    
    // ternary operator
    const age: number = 10;

    if(age > 20){
        console.log("Adult");
    } else {
        console.log("Not Adult");
    }

    // using ternary
    const isAdult = age > 20 ? "Adult" : 'Not Adult';
    console.log(isAdult);

    // nulish coalescing works only at null and undifined values
    //if the left side is null or undefined, then the right side will be assigned
    const isAuthenticate = null

    const result1 = isAuthenticate ?? "guest";

    console.log({result1});

    type User = {
        name: string;
        age: number;
        isMarried?: boolean;
        address:{
            city: string;
            country: string;
            street: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    }

    const user: User = {
        name: "Joujoniki Asa Roy",
        age: 21,
        address: {
            city: "Dhaka",
            country: "Bangladesh",
            street: "Daffodil International University",
            presentAddress: "Daffodil International University",
        }
    }

    // optional chaining and nullish coalescing
    console.log(user?.address?.permanentAddress ?? "No Permanent Address");

}