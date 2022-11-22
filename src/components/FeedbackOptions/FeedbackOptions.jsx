import React from "react";
import PropTypes from "prop-types";

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className="CounterControls">
            {options.map(el => {
                return(
                    <div key = {el}>
                        <button  onClick={() => onLeaveFeedback(el)}>{el}</button>
                    </div>
                )
            })}
           
        </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}