{// type assertion
    let anything: any;
    anything = 1;
    (anything as number).toFixed(2);
    anything = 'Next Level Web Development';
    (anything as String).charAt(0);
    anything = true;
    (anything as boolean).valueOf();

    const kgToGm = (value: number | string): number | string | undefined => {
        if (typeof value === 'string') {
            return parseFloat(value) * 1000;
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    }

    const result1 = kgToGm(1000) as number;
    const result2 =  kgToGm('1000') as string;

    console.log(result1)

    type CustomError ={
        message: string;
        code: number;
    }
    try {
        
    } catch (error) {
        console.log((error as CustomError).message);
    }
}