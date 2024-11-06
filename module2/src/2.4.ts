{
    // interface -- Generic

    interface Developer<T, X = null>{
        name: string,
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T,
        bike?: X,
    }

    // type
    interface EmilabWatch {
        brand: string;
        model: string;
        display: string
    }


    const poorDeveloper: Developer<EmilabWatch, null>= {
        name: "Joujoniki Asa Roy",
        computer: {
            brand: "Asus",
            model: "ROG",
            releaseYear: 2021
        },
        smartWatch:{
            brand: "sony",
            model: "Watch",
            display: 'OLED'
        },
    }

    interface YamahaBike {
        model: string;
        engineCapacity: string
    }
    
    //Apple watch
    interface AppleWatch {
            brand: string;
            model: string;
            heartTrack: boolean;
            sleepTranck: boolean
    }
    const richDeveloper: Developer<AppleWatch, YamahaBike>= {
        name: "Rich Dev",
        computer: {
            brand: "HP",
            model: "X-35UR",
            releaseYear: 2021
        },
        smartWatch:{
            brand: "Apple",
            model: "Watch",
            heartTrack: true,
            sleepTranck: true
        },
        bike: {
            model: "Yamaha",
            engineCapacity: '100cc'
        }
    }
}

