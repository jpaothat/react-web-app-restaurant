import React from "react";
import { useState } from "react";
import { VStack, Button } from "@chakra-ui/react";

const occasionOptions = [
    {value: "", text: "-- Select an occasion --", disabled: true},
    {value: "birthday", text: "Birthday"},
    {value: "anniversary", text: "Anniversary"},
    {value: "other", text: "Other"},
];

const ReservationForm = (props) => {
    const [date, setDate] = useState({
        value: "",
    });
    const [time, setTime] = useState({
        value: "",
        disabled: true,
    });
    const [guests, setGuests] = useState({
        value: "",
    });
    const [occasion, setOccasion] = useState({
        value: "",
        disabled: true,
    });

    const clearForm = () => {
        setDate({
            value: "",
        });
        setTime({
            value: "",
            disabled: true,
        });
        setGuests({
            value: "",
        });
        setOccasion({
            value: "",
            disabled: true,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
        clearForm();
    };

    return (
        <div className="reservationForm">
            <VStack>
                <h1 className="title_restaurant">Little Lemon</h1>
                <h1 className="subtitle_location">Chicago</h1>
                <h1 className="description_restaurant">Reserve a table</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="field">
                            <label htmlFor="date">
                                Date:
                            </label>
                            <input
                                id="date"
                                type="date"
                                name="date"
                                value={date.value}
                                onChange={(e) => { setDate(e.target.value); props.setTimesPerDate(e.target.value) }}
                                required={true}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="time">
                                Time:
                            </label>
                            <select
                                id="time"
                                name="time"
                                value={time.value}
                                onChange={(e) => setTime(e.target.value)}
                                required={true}
                            >
                                {props.availableTimes.map((time) => (
                                    <option
                                        disabled={time.disabled}
                                        key={time.value}
                                        value={time.value}
                                    >
                                        {time.text}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="guests">
                                Number of guests:
                            </label>
                            <input
                                id="guests"
                                name="guests"
                                type="number"
                                min="1"
                                max="10"
                                placeholder="Enter number of guests up to 10"
                                value={guests.value}
                                onChange={(e) => setGuests(e.target.value)}
                                required={true}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="occasion">
                                Occasion:
                            </label>
                            <select
                                id="occasion"
                                name="occasion"
                                value={occasion.value}
                                onChange={(e) => setOccasion(e.target.value)}
                                required={true}
                            >
                                {occasionOptions.map((option) => (
                                    <option
                                        disabled={option.disabled}
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.text}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <Button
                            type="submit"
                            width="100px"
                            borderRadius="2xl"
                            color="#495E57"
                            backgroundColor="#F4CE14"
                            aria-label="On Click"
                        >
                                Submit
                        </Button>
                    </fieldset>
                </form>
            </VStack>
        </div>
    );
}

export default ReservationForm;