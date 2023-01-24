import React from "react";
import Main from "./Main";
import { useReducer } from "react";
import { fetchAPI } from "./Api.js";
import ReservationForm from "./ReservationForm";

function initializeTimes() {
    const currentDate = new Date(Date.now());
    const times = fetchAPI(currentDate);
    const mappedTimes = times.map((time, index) => ({value: times[index], text: times[index]}));
    const finalTimes = [{value: "", text: "-- Select a time --", disabled: true}, ...mappedTimes];

    return (
        finalTimes
    );
}

function updateTimes(selectedDate) {
    const convertedDate = new Date(selectedDate);
    const times = fetchAPI(convertedDate);
    const mappedTimes = times.map((time, index) => ({value: times[index], text: times[index]}));
    const finalTimes = [{value: "", text: "-- Select a time --", disabled: true}, ...mappedTimes];

    return (
        finalTimes
    );
}

function reducer(state, action) {
    switch (action.type) {
        case "update":
            return updateTimes(action.date)
        default:
            return state
    };
}

const Reservations = () => {
    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());

    const setTimesPerDate = (selectedDate) => {
        dispatch({ type: "update", date: selectedDate })
    };

    return (
        <div>
            <Main>
                <ReservationForm availableTimes={availableTimes} setTimesPerDate={setTimesPerDate}/>
            </Main>
        </div>
    );
}

export default Reservations;