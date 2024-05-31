import React, { ReactElement, ReactNode } from "react";

import PageTitle from "@/components/page-title";
import CheckClasses from "@/components/planning/check-classes";

import {DateTime} from "luxon";

import pg from "pg";
import { ClassesPM } from "@/types/planning";

import {dbConnection} from "@/components/database/connection";


const { Client, Pool } = pg
const pool = new Pool(dbConnection);


import {getAssigmentsBetween } from "../lib/assignment-lib";
import {startOfWeekLocal} from "../lib/date-lib";
import { colors } from "../lib/console-colours";

interface LayoutProps {
    children: React.ReactNode
}


const Layout = async ({children}: {children: ReactNode}) => {

    const startOfWeekDt = startOfWeekLocal(DateTime.now())
    const startDate = startOfWeekDt.minus({'weeks': 52});
    const endDate = startOfWeekDt.plus({'weeks':52});

    const {data, error} = await  getAssigmentsBetween(startDate, endDate);

    //console.log(data, error);

    if (data === undefined || error) {
        return <pre>{JSON.stringify(data, null, 2)} {JSON.stringify(error, null, 2)}</pre>
    }

    // console.log(colors.bg.red, "Layout Data", colors.reset);
    // console.log(data?.filter(d => d.class_display_name.substring(0, 4) === '23-7' ));

    return <div >

        <div className="grid grid-flow-col auto-cols-max grid-cols-12 items-start">
            <div className="grid col-span-6 ">

            <PageTitle>Planning Marking</PageTitle>
            <div className="grid">
                <CheckClasses subject="BS" classes={["23-13BS", "23-12BS"]} data={data}/>
                <CheckClasses subject="BS" classes={["23-11BS1", "23-11BS2",  "23-10BS1", "23-10BS2"]} data={data}/>
                <CheckClasses subject="EC" classes={["23-11EC1", "23-10EC1", "23-10EC2"]} data={data}/>
                <CheckClasses subject="IT" classes={["23-11IT", "23-10IT"]} data={data}/>
                <CheckClasses subject="CS" classes={["23-11CS", "23-10CS"]} data={data}/>
                <CheckClasses subject="DT" classes={["23-11DT", "23-10DT"]} data={data}/>
                
                <CheckClasses subject="9IT" classes={["23-9AIT1", "23-9BIT1", "23-9CIT1"]} data={data}/>
                <CheckClasses subject="8IT" classes={["23-8AIT1", "23-8BIT1", "23-8CIT1"]} data={data}/>
                <CheckClasses subject="7IT" classes={["23-7A/IT1", "23-7B/It1", "23-7C/It1", "23-7D/It1"]} data={data}/>

                <CheckClasses subject="9DT" classes={["23-9A/Dt", "23-9B/Dt", "23-9C/Dt"]} data={data}/>
                <CheckClasses subject="8DT" classes={["23-8A-DT", "23-8B-DT", "23-8C-DT"]} data={data}/>
                <CheckClasses subject="7DT" classes={["23-7A/Dt1", "23-7B/DT1", "23-7C/Dt1", "23-7D/Dt1"]} data={data}/>

            </div> {/* overflow */ } 
            </div>
            <div className="grid col-span-6">
                <div >
                {children}
                </div>
            </div>
        </div>

       
        
    </div>
}


export default Layout;