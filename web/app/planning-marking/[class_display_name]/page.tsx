
import PageTitle from "@/components/page-title";
import {DateTime} from "luxon";
import {getAssigmentsBetween } from "@/app/lib/assignment-lib";


import {Assignment, AssignmentDetails, Outcomes} from "@/types/planning";
import {isDateInCurrentWeek, startOfWeekLocal, endOfWeekLocal, startOfNextWeekLocal, endOfNextWeekLocal} from "@/app/lib/date-lib";
import { assignmentChecks, ClassPMChecks } from "@/app/lib/assignment-checks";
import { handleUpdateAssignmentsByClassTag, handleUpdateOutcomesByAssignmentID, handleUpdateOutcomesByClassTag} from "../../update/handleUpdates";
import Button from "@/components/button";

const Page = async ({params} : {params: {class_display_name  :string}}) => {
    
    let {class_display_name} = params;
    class_display_name = decodeURIComponent(class_display_name);

    const startOfWeekDt = startOfWeekLocal(DateTime.now())
    const startDate = startOfWeekDt.minus({'weeks': 2});
    const endDate = startOfWeekDt.plus({'weeks':2});

    const {data, error} = await getAssigmentsBetween(startDate, endDate);
    const filteredData = data?.filter((d) => d.class_display_name == class_display_name)

    const assignmentsStatus = filteredData && (filteredData.length > 0) && assignmentChecks(filteredData[0]); 

    return <>
        <PageTitle>Details for {class_display_name}</PageTitle>
        <div className="flex flex-row m-3">

        <form action={handleUpdateAssignmentsByClassTag}>
            <input value={class_display_name} name="classTag" type="hidden"/>
            <Button>Refresh Assignments for {class_display_name}</Button> 
        </form>

        <form action={handleUpdateOutcomesByClassTag}>
            <input value={class_display_name} name="classTag" type="hidden"/>
            <Button>Refresh Marking for {class_display_name}</Button> 
        </form>

        </div>
        

        <DisplayAlerts checks={assignmentsStatus}/>
        
        <div >
            {
                (!filteredData || 
                    filteredData[0] === undefined ||
                    filteredData[0].assignments === undefined) ? <div>No Data</div> : ""
            }
        </div>
        <div>
            {
                filteredData?.map((cp, i) => <div key={i}>{cp.assignments.sort((a, b)=> a.assignment.due_date_time > b.assignment.due_date_time ? -1 : 1).map((a, i) => <div key={i}><DisplayAssignment assignmentDetails={a.assignment} outcomes={a.outcomes}/></div>)}</div>)
            }
        
        </div>
        
    </>
}

export default Page;



const DisplayAssignment = ({assignmentDetails, outcomes} : {assignmentDetails: AssignmentDetails, outcomes: Outcomes}) => {


    const buildOutcomeStats = (outcomes: Outcomes) => {
        return {
            outcomeCount: outcomes.length, 
            notMarked: outcomes.filter(o => o.points === null).length, 
            notCompleted: outcomes.filter(o => o.points === 0).length}
    }

    const formatBGColor = (dt: DateTime) => {
        
        if (isDateInCurrentWeek(dt)) {
            return "bg-green-200/50";
        }
    }

    const {outcomeCount, notMarked, notCompleted} = buildOutcomeStats(outcomes);
    const dueDate = DateTime.fromISO(assignmentDetails.due_date_time);
    const startDate = startOfWeekLocal(dueDate);
    const endDate = endOfWeekLocal(dueDate);

    return <div className={`border-solid border-slate-400 border-2 rounded-lg m-2 p-2 ${formatBGColor(DateTime.fromISO(assignmentDetails.due_date_time))} text-slate-800`}>
        <div>{assignmentDetails.display_name}</div>
        <div>Curr:   {dueDate.toISODate()}</div>
        
        <div className="flex text-xs align-middle">
            <DisplayOutcomes outcomeCount={outcomeCount} notMarked={notMarked} notCompleted={notCompleted}/>
            <div className="ml-2">
            ({notMarked} Not marked, {notCompleted} Not completed)
            </div>
            <form action={handleUpdateOutcomesByAssignmentID}>
                <input value={assignmentDetails.assignment_id} name="assignment_id" type="hidden"/>
                <button className="ml-2">Refresh</button>
            </form>
        </div>
        <details>
            <summary>Details</summary>
            {
                outcomes?.map((o, i)=> <p key={i}>{o.givenname} {o.surname} {o.points == null ? 'not marked' : o.points }</p>)
            }
        </details>
        
    </div>
}



const DisplayOutcomes = ({outcomeCount, notMarked, notCompleted} : {outcomeCount : number, notMarked : number, notCompleted: number, }) => {

    const notMarkedPct = 100 * (notMarked/ outcomeCount);
    const notCompletedPct =  100 * (notCompleted / outcomeCount);
    const completedPct = 100 * ((outcomeCount - notMarked - notCompleted) / outcomeCount);

    return (<div>
        <svg width="100" height="30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="round-corner">
              <rect x="0" y="0" width="100" height="20" rx="5" ry="5" />
            </clipPath>
          </defs>
  
          <rect
            x="0"
            y="0"
            width={notMarkedPct}
            height="20"
            fill="silver"
            clipPath="url(#round-corner)"
          />
          <rect
            x={notMarkedPct}
            y="0"
            width={completedPct}
            height="20"
            fill="green"
            clipPath="url(#round-corner)"
          />
          <rect
            x={notMarkedPct + completedPct}
            y="0"
            width={notCompletedPct}
            height="20"
            fill="red"
            clipPath="url(#round-corner)"
          />
        </svg>
      </div>)
}


const DisplayAlerts = ({checks}:{checks : false | ClassPMChecks | undefined}) => {
    
    if (checks === undefined || checks === false) {
        return <>No Alert Data Available</>
    }

    return <>
    <div className="flex flex-row">
        <div className={`m-1 p-2 rounded-md ${checks.includes("hasNoAssignmentsInNextWeek") ? 'bg-red-500' : 'bg-slate-100'} `}>Next week not planned</div>
        <div className={`m-1 p-2 rounded-md ${checks.includes("hasNoAssignmentsInCurrentWeek") ? 'bg-red-500' : 'bg-slate-100'} `}>Current week not planned</div>
        <div className={`m-1 p-2 rounded-md ${checks.includes("hasUnmarkedInPrevWeek") ? 'bg-red-500' : 'bg-slate-100' }`}>Last week not marked</div>
        
    </div>
    
    </>
}