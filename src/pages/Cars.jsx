import { useEffect, useRef, useState } from "react";

import { FaCalendar, FaCar, FaLocationArrow } from "react-icons/fa";
import ContainerSmall from "../components/Container/ContainerSmall";
import { useForm } from "react-hook-form";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [model, setModel] = useState("");
  const [summery, setSummery] = useState({})
  console.log(summery);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const carname = model
    const newData = {...data, carname }
    setSummery(newData)
  };

  const handelSuccess = () => {

    

  }



  useEffect(() => {
    fetch("carsCollection.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div>
      <ContainerSmall>
        <div className=" bg-slate-200 p-10">
          <h2 className="text-center text-2xl font-bold">Book a Car</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex gap-5 w-full">
              <div className="flex-1">
                <label className="block text-gray-600 font-bold mb-2 flex items-center gap-3">
                  <FaCar></FaCar> Book a Car
                </label>
                <select  onChange={(e)=> setModel(e.target.value)}  name="Car-Name" id="" className="p-2 rounded-sm w-full">
                  {cars.map((car) => (
                    <option
                      className="text-gray-400 m-2 "
                      key={car.value}
                      value={car.carName}
                      
                    >
                      {car.carName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-gray-600 font-bold mb-2 flex items-center gap-3">
                  <FaLocationArrow></FaLocationArrow> Pick-up (Dhaka city area)
                </label>
                <input
                {...register('Pick-Up-Place')}
                  className="text-gray-400 p-2 rounded-sm w-full "
                  type="text"
                  name="Pick-Up-Place"
                  id=""
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-600 font-bold mb-2 flex items-center gap-3">
                  <FaLocationArrow></FaLocationArrow> Drop-off (Dhaka city area)
                </label>
                <input
                 {...register('Drop-off-Place')}
                  className="text-gray-400 p-2 rounded-sm w-full "
                  type="text"
                  name="Drop-off-Place"
                  id=""
                />
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <div className="flex-1">
                <label className="block text-gray-600 font-bold mb-2 flex items-center gap-3">
                  <FaCalendar></FaCalendar> Pick-up Date
                </label>
                <input
                {...register('Pick-up')}
                  className="text-gray-400 p-2 rounded-sm w-full "
                  type="date"
                  name="Pick-up"
                  id=""
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-600 font-bold mb-2 flex items-center gap-3">
                  <FaCalendar></FaCalendar> Drop-off Date
                </label>
                <input
                    {...register('Drop-off')}
                  className="text-gray-400 p-2 rounded-sm w-full "
                  type="date"
                  name="Drop-off"
                  id=""
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-600 font-bold mb-2 flex items-center gap-3">
                  <FaCalendar></FaCalendar> Time
                </label>

                <input
                  {...register("time")}
                  className="text-gray-400 p-2 rounded-sm w-full "
                  type="time"
                  name="time"
                  id=""
                />
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <input onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn w-1/2 " type="submit" value="Submit" />

            </div>
            
          </form>
          <div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{summery.Drop-off}</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                    <form method="dialog" className="flex gap-5">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn bg-red-500 text-white">Close</button>
                        <button  onClick={handelSuccess} className="btn">Pressed</button>
                    </form>
                    </div>
                </div>
                </dialog>
            </div>
        </div>
      </ContainerSmall>
    </div>
  );
};

export default Cars;
