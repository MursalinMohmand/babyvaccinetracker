import React, { useEffect, useState } from "react";
import BabayCard from "./Components/BabyCard";
import Header from "./Components/Header";
import Modal from "./Components/Modal";
import { v4 as uuidv4 } from 'uuid';
import RightSideCard from "./Components/RightSideCard";
import Empty from "./Components/Empty";
import babyImage from './assets/baby.png'
import babyVaccine from './data/VaccineData.json'

export default function App() {

  const [showModel, setShowModal] = useState(false)
  const [age, setAge] = useState()
  const [babyList, setBabyList] = useState(() => {
    const savedBabies = localStorage.getItem("babiesList");
    return savedBabies ? JSON.parse(savedBabies) : [];
  });

  function ModelClick() {
    setShowModal(true)
  }




  function addBaby(babyData) {

    const dobDate = new Date(babyData.dob);
    const todayDate = new Date();

    if (!babyData.name.trim() || !babyData.dob)
      return

    let DiffYears = todayDate.getFullYear() - dobDate.getFullYear();
    let DiffMonths = todayDate.getMonth() - dobDate.getMonth();
    let DiffDay = todayDate.getDate() - dobDate.getDate();


    if (DiffDay < 0) {
      let previousMonthDays = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0).getDate();
      DiffDay += previousMonthDays;
      DiffMonths--;
    }



    // 4. Fix negative months
    if (DiffMonths < 0) {
      DiffMonths += 12;
      DiffYears--;
    }

    // 5. Build dynamic string based on age
    let finalAge = "";
    if (DiffYears >= 1) {
      finalAge = `${DiffYears} Years , ${DiffMonths} Months`;
    } else {
      finalAge = `${DiffMonths} Months , ${DiffDay} Days`;
    }

    // 6. Update object properties and React state

    const newBabyRecord = {
      id: uuidv4(),
      name: babyData.name,
      dob: babyData.dob,
      gender: babyData.gender,
      bloodGroup: babyData.bloodGroup,
      age: finalAge
    };

    if (todayDate < dobDate) {
      alert('Please select valid date of birth')
      return
    }

    setBabyList([...babyList, newBabyRecord]);
    setAge(finalAge);
  }

  useEffect(() => {
    localStorage.setItem("babiesList", JSON.stringify(babyList));
  }, [babyList]);

  return (
    <>
      <Modal setAge={setAge} addBaby={addBaby} setShowModal={setShowModal} showModel={showModel} />
      <Header ModelClick={ModelClick} />
      <div className="grid mt-15 grid-cols-4">
        <div className="col-span-3">
          <div className="flex p-5 scrollbar-none
        snap-x snap-mandatory
                [&::-webkit-scrollbar]:hidden overflow-x-auto gap-3">
            {
              babyList.map((baby) => (
                <BabayCard key={uuidv4()} name={baby.name} dob={baby.dob} age={baby.age} />
              ))
            }
          </div>


          {/* Table Div */}

          {
            babyList.length == 0
              ? <Empty />
              : <>
                <div className="h-90 flex-1 scrollbar-thin scrollbar-thumb-indigo-200 overflow-y-auto bg-white border-t border-gray-100">

                  <table className="w-full">
                    <thead className="h-12 rounded-lg top-0 sticky bg-gray-100">
                      <tr className=" text-indigo-600 text-sm">
                        <th className="text-center">Baby</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Vaccine</th>
                        <th className="text-center">Due Date</th>
                        <th className="text-center">Age at Due</th>
                        <th className="text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody >


                      {
                        babyList.map((item) => {
                          return (
                            <tr key={uuidv4()} className="text-center cursor-pointer transition-transform hover:scale-99 hover:shadow-md duration-500 ease-initial hover:bg-indigo-50/50 border border-gray-100 rounded-lg">
                              <td >
                                <img src={babyImage}
                                  className='w-12 my-1 justify-self-center rounded-full'
                                />
                              </td>
                              <td><h1>{item.name}</h1></td>
                              <td><h1>{item.name}</h1></td>
                              <td><h1>{item.dob}</h1></td>
                              <td><h1>{item.age}</h1></td>
                              <td ><h1 className='bg-orange-100 text-orange-600 rounded-lg'>Due in 4 Days</h1>
                              </td>
                            </tr>
                          )


                        })
                      }


                    </tbody>
                  </table>


                </div>
              </>
          }
        </div>

        <div className="col-span-1 m-2 p-5 overflow-y-hidden  bg-gray-50">
          <RightSideCard babyList={babyList} />
        </div>
      </div >
    </>
  );
}
