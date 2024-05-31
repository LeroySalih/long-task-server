import {ClassesPM, ClassPM, Assignment} from "@/types/planning";
import React from "react";
import {DateTime} from "luxon";
import Link from "next/link";
import {startOfWeekLocal} from "@/app/lib/date-lib";
import {assignmentChecks} from "@/app/lib/assignment-checks";

interface PMProps {
    data: ClassPM | undefined,
    cl: string
}

const CheckClass:React.FC<PMProps> = ({data, cl}) => {

    const bgColor = (data:ClassPM | undefined, cl: string) => {
        
        if (!data) {
            return 'bg-slate-300'
        }

        const result  = assignmentChecks(data);

        if (!result || result.length !== 0 ) {
            return 'bg-red-700'
        }

        return 'bg-green-700';
    }


    return <>
        <div className="flex m-1">
            <Link href={`/planning-marking/${encodeURIComponent(cl)}`}>
                <div className={`${bgColor(data, cl)} rounded-xl text-white text-xs p-1 pl-2  pr-2 w-auto border-green-400 border-solid border-4`}>{cl}
            </div> 
            </Link>
        </div>
        
        
    </>
}

export default CheckClass;