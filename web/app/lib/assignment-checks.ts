import { ClassPM, Assignments, Assignment } from "@/types/planning"
import { DateTime} from "luxon";
import { isDateInCurrentWeek, isDateInNextWeek, isDateInPrevWeek} from "@/app/lib/date-lib";


type ClassPMCheck = "noClassPlanningData" | "hasNoAssignmentsInCurrentWeek" | "hasNoAssignmentsInNextWeek" | "hasUnmarkedInPrevWeek"
export type ClassPMChecks= ClassPMCheck[];

const checkCurrentWeek = (dt: string) => {
    
    const date = DateTime.fromISO(dt);

    return isDateInCurrentWeek (date);
}


const checkNextWeek = (dt: string) => {

    const date = DateTime.fromISO(dt);
    
    return isDateInNextWeek (date);
}


const checkPrevWeek = (dt: string) => {
    const date = DateTime.fromISO(dt);

    return isDateInPrevWeek(date);
}

//
export const assignmentChecks = (classPM: ClassPM) : ClassPMChecks =>  {

    if (classPM === undefined || classPM.assignments === undefined){
        return ["noClassPlanningData"];
    }

    const {assignments} = classPM;
    const checks:ClassPMChecks = [];

    // filter the assignments for current week
    const currentWeekAssignments = assignments.filter(a => checkCurrentWeek(a.assignment.due_date_time)) || [];

    if (currentWeekAssignments.length == 0) {
        checks.push("hasNoAssignmentsInCurrentWeek");
    }

    const nextWeekCount = (assignments.filter(a => checkNextWeek(a.assignment.due_date_time)) || []).length || 0;
    if (nextWeekCount === 0) {
    //    checks.push("hasNoAssignmentsInNextWeek");
    //    console.log("Next Week assignments", assignments.filter(a => checkNextWeek(a.assignment.due_date_time)))
    }

    // loop through current week assignments
    let unmarked = false;

    const prevWeekAssignments = assignments.filter(a => checkPrevWeek(a.assignment.due_date_time)) || [];

    if (prevWeekAssignments.length > 0) {
        // if there are assignments for last week.
        
        for (const assignment of currentWeekAssignments) {
            const currentWeekUnmarked = assignment.outcomes.filter(o => o.points === null);
            if (currentWeekUnmarked.length > 0){
                // unmarked found, so exit
                unmarked = true;
                break;
            }
        }

        // if there are unmarked assignments for last week
        if (unmarked) {
            checks.push("hasUnmarkedInPrevWeek")
        }

    }
    

    return checks;
}