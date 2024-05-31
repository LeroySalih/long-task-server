export type Outcome = {
    points: number | null,
    surname: string, 
    givenname: string
};

export type Outcomes = Outcome[];

export type AssignmentDetails= {
    assignment_id: string,
    display_name: string,
    due_date_time: string
}

export type Assignment = {
    outcomes: Outcomes,
    assignment: AssignmentDetails
}

export type Assignments = Assignment[] 

export type ClassPM = {
    class_display_name : string, 
    class_id: string,
    assignments: Assignments
}

export type ClassesPM = ClassPM[] | null

export type DeptClassAssignmentCount = {
    display_name : string,
    teacher: string,
    count: number
}

export type DeptClassAssignmentCounts = DeptClassAssignmentCount[];