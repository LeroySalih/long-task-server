export const dynamic = 'force-dynamic'

import PageTitle from "@/components/page-title"
import {handleUpdateClasses, handleUpdateUsers, handleUpdateAssignments, handleUpdateOutcomes} from "./handleUpdates";
import {getDeptClassAssignmentCounts} from "@/app/lib/assignment-lib";
import Button from "@/components/button";


const Page = async () => {

    const {data, error} = await getDeptClassAssignmentCounts();

    if (error) {
        return <h1>{error.message}</h1>
    }

    return <>
    <PageTitle>Update</PageTitle>
    
    <div className="flex flex-row">
        <form action={handleUpdateClasses}>
            <Button type="submit">Update Classes</Button>
        </form>

        <form action={handleUpdateUsers}>
            <Button type="submit">Update Users</Button>
        </form>

        <form action={handleUpdateAssignments}>
            <Button type="submit">Update Assignments</Button>
        </form>
        <form action={handleUpdateOutcomes}>
            <Button type="submit">Update Marking</Button>
        </form>
    </div>
    

    

    <h1>Assignment Counts</h1>
    {
        data?.map((d, i) => <div key={i} className="flex grid grid-cols-3">
            <div className="m-2">{d.teacher}</div>
            <div className="m-2">{d.display_name}</div>
            <div className="m-2">{d.count}</div>
        </div>)
    }

    </>
}

export default Page;