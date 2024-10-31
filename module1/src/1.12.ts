{
    //Never, Unknown, and Nullable type

    // nullable type
    const searchNumber = (value: string | null) => {
        if (value) {
            console.log('Searching...');
        }
        else {
            console.log('Not found');
        }
    }
    searchNumber(null)
    searchNumber("abc")

    // unknown type
    // unknown type can be assigned to any type
    //need to check the type at runtime
    const getSpeedInMeterPerSecond = (speed: unknown) => {
        if (typeof speed === 'number') {
            console.log(`speed is ${speed * 1000 / 3600} m/s`);
        }
        else if (typeof speed === 'string') {
            const valueInNumber = speed.split(' ')[0];
            const unit = speed.split(' ')[1];
            console.log(`speed is ${valueInNumber} m/s`);
        }
        else {
            console.log('speed is unknown');
        }
    }

    getSpeedInMeterPerSecond(10)
    getSpeedInMeterPerSecond('10 kmh^-1')

    // never type
    const throwError = (message: string): never => {
        throw new Error(message)
    }

    throwError('Error ho gaya')
}