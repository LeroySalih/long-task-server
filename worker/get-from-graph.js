import {callFullApi} from "./graph-lib.js";
import {colors} from "./console-colours.js";

export const getSubmissionsForAssignmentFromGraph = async (assignment, token) => {

    let data;

    // console.log("assignment", assignment);
    console.log("Assignment", assignment)
    const uri = `https://graph.microsoft.com/beta/education/classes/${assignment.class_id}/assignments/${assignment.id}/submissions`
    const {data:graphSubmissions, error} = await callFullApi(uri, token);

    if (error) {
        console.error("Assignment", assignment);
        console.error("error", error.message);
        return {data, error}
    }
    
    data = graphSubmissions.map(s => ({
        submission_id: s.id,
        class_id: assignment.class_id,
        assignment_id: assignment.id,
        user_id: s.recipient.userId
    }));
 
    return {data, error}

}

export const getOutcomeForSubmissionFromGraph = async (submission, token) => {

    let data;

    console.log("submission", submission);

    const uri = `https://graph.microsoft.com/beta/education/classes/${submission.class_id}/assignments/${submission.assignment_id}/submissions/${submission.submission_id}/outcomes`
    const {data:graphOutcomes, error} = await callFullApi(uri, token);

    if (error || graphOutcomes[0] == undefined) {
        console.error(uri)
        console.error("getOutcomeForSubmissionFromGraph", error)
        return {data: graphOutcomes, error}
    }

    // find the correct outcome by type
    // console.log("graphOutcomes::", graphOutcomes)
    const points = graphOutcomes.filter(o => o["@odata.type"] == '#microsoft.graph.educationPointsOutcome')[0]?.points
    
    points ? console.log(colors.bg.green, "Points detected", points.points, colors.reset) : null

    const outcome  = {
        submission_id: submission.submission_id,
        class_id: submission.class_id,
        assignment_id: submission.assignment_id,
        user_id: submission.user_id,
        points: points ? points.points : null
    };
 
    return {data: outcome, error}

}