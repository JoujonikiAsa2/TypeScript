"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish coalescing
    // ternary operator
    const age = 10;
    if (age > 20) {
        console.log("Adult");
    }
    else {
        console.log("Not Adult");
    }
    // using ternary
    const isAdult = age > 20 ? "Adult" : 'Not Adult';
    console.log(isAdult);
    // nulish coalescing works only at null and undifined values
    //if the left side is null or undefined, then the right side will be assigned
    const isAuthenticate = null;
    const result1 = isAuthenticate !== null && isAuthenticate !== void 0 ? isAuthenticate : "guest";
    console.log({ result1 });
    const user = {
        name: "Joujoniki Asa Roy",
        age: 21,
        address: {
            city: "Dhaka",
            country: "Bangladesh",
            street: "Daffodil International University",
            presentAddress: "Daffodil International University",
        }
    };
    // optional chaining and nullish coalescing
    console.log((_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address");
}
