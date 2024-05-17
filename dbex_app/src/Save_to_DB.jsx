import React, { useEffect, useState } from 'react';
import SaveIcon from "./assets/save.svg";
import handleChange from "./Editable_table"

export default function Save_to_DB({ onClick }){

    const handleButtonClick = () => {
        if (hasChanges) {
          // Here you can push the modified data to your backend or perform any other action
        console.log('Data has changed. Pushing data:', tableData);
          // Reset hasChanges flag
        setHasChanges(false);
        } else {
        console.log('No changes to push.');
        }
    };

    return(
        <div>
            <button onClick={onClick}>
                <img src={SaveIcon} alt="Save Image" width="20" height="30"/>SAVE TO DATABASE
            </button>
        </div>
    )
}