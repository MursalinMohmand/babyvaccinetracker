import { Calendar, Droplet, User } from 'lucide-react'
import React, { useRef, useState } from 'react'

export default function Modal({ showModel, setShowModal, bmodel, addBaby }) {

    const dateInputRef = useRef()

    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("male");
    const [bloodGroup, setBloodGroup] = useState("AB+");



    // Resets values back to base state
    function handleClearInputs() {
        setName("");
        setDob("");
        setGender("male");
        setBloodGroup("AB+");

    }

    function handleSaveBaby() {
        const todayDate = new Date();

        if (name.trim() === "" || !dob) {
            alert("Error 404 :  Please fill out the name and date of birth.");
            return;
        }


        if (dob > todayDate) {
            alert("Please Select Correct Date of Birth");
            return;
        }

        // Send data object payload back up to App component
        addBaby({ name, dob, gender, bloodGroup });

        hideModal(); // Wipes inputs and closes window safely
    }



    function hideModal() {
        setShowModal(false)
        handleClearInputs()
    }



    function handleIconClick() {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker()
        }
    }




    return (
        <div className={`fixed inset-0 bg-black/80 z-10 backdrop-blur-xs ${showModel ? "" : "hidden"}`}>

            <div className='flex items-center justify-center h-screen'>
                <div className='w-110 p-4 rounded-lg bg-white'>
                    <h1 className='font-semibold text-indigo-600'>Add new baby</h1>

                    <div className='grid grid-cols-2 mt-5 gap-5'>
                        <div className='flex flex-col'>
                            <label htmlFor="">Name</label>
                            <div className='flex items-center p-1 border border-gray-400 gap-2 rounded-lg'>
                                <User size={20} className='text-indigo-600' />

                                <input

                                    maxLength={20}
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                    placeholder='Baby name here'
                                    className='w-full outline-none' type="text" />

                            </div>

                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="">Date of birth</label>
                            <div className='flex items-center p-1 border border-gray-400 rounded-lg gap-5'>
                                <Calendar onClick={
                                    handleIconClick
                                } size={20} className='text-indigo-600' />
                                <input
                                    ref={dateInputRef}
                                    value={dob}
                                    onChange={(e) => {
                                        setDob(e.target.value)
                                    }}
                                    className='cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 focus:outline-0 ' type="date" />

                            </div>
                        </div>



                        <div >
                            <h1>Gender</h1>
                            <select className='w-full border p-1 rounded-lg border-gray-400'>
                                <option value="male">Male</option>
                                <option value="male">Female</option>
                            </select>
                        </div>

                        <div >
                            <h1>Blood Group</h1>
                            <div className='flex items-center  border p-1 rounded-lg border-gray-400'>
                                <Droplet size={20} className='text-indigo-600' />
                                <select className='w-full outline-none'>
                                    <option value="B+">AB+</option>
                                    <option value="B+">AB-</option>
                                    <option value="A+">A+</option>
                                    <option value="B+">B+</option>
                                    <option value="B+">O+</option>
                                    <option value="B+">A-</option>
                                    <option value="B+">B-</option>
                                    <option value="B+">O-</option>
                                </select>
                            </div>
                        </div>

                        <button onClick={() => {
                            hideModal()
                        }} className='bg-white cursor-pointer hover:bg-indigo-600 hover:text-white text-indigo-600 border border-indigo-400 p-1 rounded-lg'>Cancel</button>
                        <button onClick={handleSaveBaby} className='bg-indigo-600 hover:bg-indigo-800 cursor-pointer text-white p-1 rounded-lg'>Save Baby</button>

                    </div>



                </div>

            </div>
        </div>
    )
}
