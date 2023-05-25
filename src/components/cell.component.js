import React from 'react';



function Cell({id,value,onCellClicked,completed, winner}) {

    var borders = [
        "b_right b_bottom",
        "b_left b_right b_bottom",
        "b_left b_bottom",

        "b_top b_right b_bottom",
        "b_top b_right b_left b_bottom",
        "b_top b_left b_bottom",

        "b_top b_right",
        "b_top b_right b_left",
        "b_top b_left",
    ]

    var cellClasses = "cell "+borders[id];

    var cellStyle = {};
    var eventHandler = null;

    if (value || completed) {
        cellStyle.cursor = "not-allowed";
        eventHandler = null;
    } else {
        cellStyle.cursor = "pointer";
        eventHandler = () => onCellClicked(id);
    }

    if (!value) {
        cellStyle.color = "transparent";
        cellStyle.cursor = "pointer";
    }

    if(winner)
        cellStyle.backgroundColor = "lime"

    return (
        <button className={cellClasses} style={cellStyle}
            onClick={eventHandler}
        >
            {value ?? "_"}
        </button>
    )

}




export default Cell;