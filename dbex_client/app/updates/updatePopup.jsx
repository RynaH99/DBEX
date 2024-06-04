import React from 'react';

const UpdatePopup = ({show, onClose}) => {
    if (!show) return null

    return(
        <>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl mb-4">Popup Title</h2>
                <p className="mb-4">This is a simple popup content.</p>
                <button onClick={onClose} className="bg-red-500 text-white p-2 rounded">Close</button>
            </div>
        </div>
        </>
    )
}

export default UpdatePopup