{
    //function with generic
    const createArray = (params: string) => {
        return [params]
    }

    // generic function
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const res = createArray('Bangladesh')
    const res1 = createArrayWithGeneric<string>('Bangladesh')
    const res2 = createArrayWithGeneric(1)
    const res3 = createArrayWithGeneric(true)

    type User = {
        name: string
        age: number
    }
    const res4 = createArrayWithGeneric<User>({ name: 'Joujoniki Asa Roy', age: 21 })

    console.log(res, res1, res2, res3)



    // tuple with generic
    const createArrayWithTuple = <T, Q>(param1: T, param2: Q) => {
        return [param1, param2]
    }

    const res5 = createArrayWithTuple('Bangladesh', 2)
    const res6 = createArrayWithTuple<string, number>('Bangladesh', 2)

    type User2 = {
        name: string
        age: number
    }
    const res9 = createArrayWithTuple<string, User2>('Hello', { name: 'Joujoniki Asa Roy', age: 21 })
    console.log(res, res1, res2, res3)

    const addCourseToStudent = <T>(student: T) => {
        const course = "Next Level Web Development"

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({
        name: 'Joujoniki Asa Roy',
        age: 21,
        devType: 'NLWD'
    })
    const student2 = addCourseToStudent({
        name: 'Asa Roy',
        age: 21,
        verified: true
    })
}