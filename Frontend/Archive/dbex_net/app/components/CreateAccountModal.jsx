import React from 'react';

export default function CreateAccountModal({ isOpen, onClose, onSubmit }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-96">
                <h2 className="text-2xl mb-4 font-bold">Create Account</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            className="border p-2 w-full"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="password"
                            className="border p-2 w-full"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <button type="button" onClick={onClose} className="text-black p-2 rounded-full border-2 border-white hover:text-gray-600 hover:border-2 hover:border-gray-600">Cancel</button>
                        <button type="submit" className="bg-black text-white p-2 rounded-full hover:bg-gray-900 hover:text-stone-200 shadow-lg shadow-black/20">Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
