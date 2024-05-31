

import PageTitle from "@/components/page-title"
import {handleUpdateClasses, handleUpdateUsers, handleUpdateAssignments, handleUpdateOutcomes} from "./handleUpdates";
import {getDeptClassAssignmentCounts} from "@/app/lib/assignment-lib";


const Page = async () => {

    const {data, error} = await getDeptClassAssignmentCounts();

    if (error) {
        return <h1>{error.message}</h1>
    }

    return <>
    <PageTitle>Update</PageTitle>
    

    <form action={handleUpdateClasses}>
        <button type="submit">Update Classes</button>
    </form>

    <form action={handleUpdateUsers}>
        <button type="submit">Update Users</button>
    </form>

    <form action={handleUpdateAssignments}>
        <button type="submit">Update Assignments</button>
    </form>

    <form action={handleUpdateOutcomes}>
        <button type="submit">Update Marking</button>
    </form>

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