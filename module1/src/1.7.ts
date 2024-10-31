{
    //spread operator
    //rest operator
    //distructuring

// array
    const bros1: string[] = ['Mir', 'Fizz', 'Buzz'];
    const bros2: string[] = ['Mis', 'Dis', 'Lis'];

    bros1.push(...bros2); // spread operator

// object
    const user1 = {
        university: "Daffodil International University",
        course: "Full Stack Web Development",
        name: "Joujoniki Asa Roy",
        age: 21
    };

    const user2 = {
        university: "Daffodil International University",
        course: "Full Stack Web Development",
        name: "Asa Roy",
        age: 21
    };

    const userList = {
        ...user1, // spread operator
        ...user2
    }


    // rest operator
   const greetFriends = ( ...friends: string[]) => {
        friends.forEach(friend => {
                console.log(`Hello ${friend}`);
        });
   }

   greetFriends('Mokbul', 'Dakkat', 'Rusha', 'Joujoniki', 'Asa')
}