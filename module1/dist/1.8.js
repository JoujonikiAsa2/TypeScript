"use strict";
{ // Object Destructuring
    const user = {
        id: 1034,
        name: {
            firstName: "Joujoniki",
            middleName: "Asa",
            lastName: "Roy"
        },
        address: {
            street: "Daffodil International University",
            city: "Dhaka",
            country: "Bangladesh"
        },
        contactNo: {
            home: 1700000000,
            mobile: 1700000001,
            office: 1700000002
        }
    };
    const { id, name: { firstName, middleName, lastName }, address: { street, city, country }, contactNo: { home, mobile, office } } = user;
    console.log(id, firstName, middleName, lastName, street, city, country, home, mobile, office);
    // array destructuring
    const myFriends = ['shawon', 'nabila', 'saki', 'zim', 'abir'];
    const [, f2, f3, f4, f5] = myFriends;
    console.log(f2, f3, f4, f5);
    const [f1, ...rest] = myFriends; // rest operator
    console.log(f1, rest);
}
