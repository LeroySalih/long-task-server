
import {
    doUpdateClasses, 
    doUpdateAssignments, 
    doUpdateAssignmentsByClassTag,
    doUpdateOutcomesByAssignmentId,
    doUpdateOutcomesByClassTag,
    doUpdateOutcomes, 
    doUpdateUsers} from "./do-updates.js";

export const parseMsg = async (pool, msg) => {
 
  
    if (!msg.token) {
        console.log("No token received")
        return;
    }

    switch(msg.task) {
        case 'update-classes' : await doUpdateClasses (pool, msg.token); return;
        case 'update-assignments' : await doUpdateAssignments(pool, msg.token); return;
        case 'update-assignments-class-tag' : await doUpdateAssignmentsByClassTag(pool, msg.payload.classTag, msg.token); return;
        case 'update-outcomes-assignment-id' : await doUpdateOutcomesByAssignmentId(pool, msg.payload.assignment_id, msg.token); return;
        case 'update-outcomes-class-tag' : await doUpdateOutcomesByClassTag(pool, msg.payload.classTag, msg.token); return;
        case 'update-outcomes' : await doUpdateOutcomes(pool, msg.token); return;
        case 'update-users' : await doUpdateUsers(pool, msg.token); return;
        default: console.log("UNKNOWN TASK", msg.task); return;  
    }
}