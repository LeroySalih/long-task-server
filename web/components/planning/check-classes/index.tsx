import {ClassesPM, ClassPM} from "@/types/planning";
import React from "react";
import CheckClass from "@/components/planning/check-class";

interface PMProps {
    subject: string,
    data: ClassesPM,
    classes: string[]
}

const CheckClasses:React.FC<PMProps> = ({subject, data, classes}) => {

    // console.log("CheckClasses", data?.filter(c => c.class_display_name.substring(0, 4) === '23-7'));

    return <>
        
            <div className="flex">
                <div className="text-2xl w-1/4">{subject}</div>
                <div className="flex">
                {
                    classes && classes.map((c, i) => <CheckClass  key={i} cl={c} data={data?.filter((f:ClassPM) => f.class_display_name == c)[0]}></CheckClass>)
                }
                </div>
            </div>
            
    </>
}

export default CheckClasses;