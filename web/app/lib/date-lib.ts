import {DateTime} from "luxon";

export const startOfWeekLocal = (dt: DateTime) => {
    //return dt;
    return dt.startOf('week')
             .plus({ week: dt.weekdayShort === 'Sun' ? 1 : 0 })
             .minus({ day: 1 })
}

export const endOfWeekLocal = (dt: DateTime) => {
    return startOfWeekLocal(dt).plus({days: 7});
}

export const startOfNextWeekLocal = (dt: DateTime) => {
    //return dt;
    return startOfWeekLocal(dt).plus({weeks: 1})
}

export const endOfNextWeekLocal = (dt: DateTime) => {
    return endOfWeekLocal(dt).plus({weeks: 1})
}


export const isDateInCurrentWeek = (date: DateTime)=> {
    // Get the current date
    const now = DateTime.now();
    
    // Find the start of the current week (Sunday)
    const startOfWeek = startOfWeekLocal(date);
    
    // Find the end of the current week (Saturday)
    const endOfWeek = endOfWeekLocal(date);

    // Check if the input date is within the current week
    return now >= startOfWeek && now < endOfWeek;
}

export const isDateInNextWeek = (date: DateTime) => {
    // Get the current date
    const now = DateTime.local();
    
    // Find the start of the current week (Sunday)
    const startOfNextWeek = startOfWeekLocal(now).plus({weeks: 1});

    // Find the end of the current week (Saturday)
    const endOfNextWeek = startOfNextWeek.plus({ days: 7 });

    // Convert the input date to a DateTime object
    

    // Check if the input date is within the current week
    
    return date >= startOfNextWeek && date < endOfNextWeek;
}


export const isDateInPrevWeek = (date: DateTime) => {
    // Get the current date
    const now = DateTime.local();
    
    // Find the start of the current week (Sunday)
    const startOfPrevWeek = startOfWeekLocal(date).minus({ weeks: 1 });;

    // Find the end of the current week (Saturday)
    const endOfPrevWeek = startOfPrevWeek.plus({ days: 7 });

    // Convert the input date to a DateTime object
    

    // Check if the input date is within the current week
    return date >= startOfPrevWeek && date < endOfPrevWeek;
}


export const isDatePreviousWeek = (date: DateTime) => {
    
    // Get the current date
    const now = DateTime.local();
    
    // Find the start of the current week (Sunday)
    const startOfPreviousWeek = startOfWeekLocal(date).minus({ weeks: 1 });

    // Find the end of the current week (Saturday)
    const endOfPreviousWeek = startOfPreviousWeek.plus({ days: 6 });

    // Convert the input date to a DateTime object
    

    // Check if the input date is within the current week
    return date >= startOfPreviousWeek && date <= endOfPreviousWeek;
}


