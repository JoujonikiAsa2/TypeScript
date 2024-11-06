{
    //constraint mean force type

    const addCourseToStudent = <T extends {id: number, name: string, email: string}>(student: T) => {
        const course = "Next Level Web Development"
        return {
            ...student,
            course
        }
    }

    const student = addCourseToStudent({
        id: 1035,
        name: 'Joujoniki Asa Roy',
        email: `a@gmail.com`
    })
    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id: 1034,
        name: 'Joujoniki Asa Roy',
        email: `a@gmail.com`,
        devType: 'NLWD'
    })
    const student2 = addCourseToStudent({
        id: 1054,
        name: 'Asa Roy',
        email: `b@gmail.com`,
        verified: true
    })

}