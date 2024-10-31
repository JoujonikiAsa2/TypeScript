// union and intersection type

// union type

// type FrontendDeveloper = 'Angular' | 'React' | 'Vue'
// type BackendDeveloper = 'Node' | 'PHP' | 'Python'

// type Developer = FrontendDeveloper | BackendDeveloper

// let developer: Developer = 'Angular'

// intersection type
type FrontendDeveloper = {
    skills: string[],
    degignation1: "Frontend Developer"
}

type BackendDeveloper = {
    skills: string[],
    degignation2: "Backend Developer"
}

type Developer = FrontendDeveloper & BackendDeveloper

let developer: Developer = {
    skills: ['HTML', 'CSS', 'JS'],
    degignation1: "Frontend Developer",
    degignation2: "Backend Developer"    

}