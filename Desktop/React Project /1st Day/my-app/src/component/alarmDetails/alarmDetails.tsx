import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/selectorDispatch";
import { deleteAlarm, updateAlarm } from "../../slice/indexSlice";
import AddAlarmModal from "../addAlarmModal/addAlarmModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactSwitch from 'react-switch';

const AlarmDetails = () => {
  let sound:any = new Audio('./beepSound.mp3')
  const timerData = useAppSelector((state) => state.alaramTimer);
  const dispatch = useAppDispatch();

  const deleteAlarms = (index: number) => {
    dispatch(deleteAlarm(index));
  };

  const toggleAlarmActive = (index: number) => {
    const updatedItem = { ...timerData[index], active: !timerData[index].active };
    dispatch(updateAlarm({ index, ...updatedItem }));
  };

  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [modalShow, setModalOpen] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  const selectedUpdatedData = (index: number) => {
    setModalOpen((prev) => !prev);
    setSelectedIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const matchingAlarms = timerData.filter((item) => {
      const itemTimeWithoutAMPM = item.value.replace(/(AM|PM)/i, "").trim();

      return itemTimeWithoutAMPM === currentTime.replace(/(AM|PM)/i, "").trim();
    });  
    if (matchingAlarms.length > 0) {
      matchingAlarms.forEach((matchingAlarm) => {
        if(matchingAlarm.active){
          toast.success(`Alarm triggered at ${matchingAlarm.value}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            sound.play();
        }
      });
    }
  }, [timerData, currentTime, sound]);

  return (
    <>
      {timerData &&
        timerData.map((item, index) => {
          return (
            <div
              className="col-10 d-flex flex-row justify-content-center align-items-center border-bottom my-2 py-1 border-top"
              key={index}
            >
              <div className="col-6">
                <p className="m-0 p-0">{item.value}</p>
              </div>
              <div className="col-6 d-md-flex align-items-center justify-content-end">
                <ReactSwitch checked={item.active}
                    onChange={() => toggleAlarmActive(index)}
                  />

                <button className="btn btn-primary mx-1 my-1 float-end">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-filled/50/pencil--v1.png"
                    alt="pencil--v1"
                    onClick={() => selectedUpdatedData(index)}
                  />
                </button>
                <button className="btn btn-danger float-end my-1">
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/filled-trash.png"
                    alt="filled-trash"
                    onClick={() => deleteAlarms(index)}
                  />
                </button>  
              </div>
            </div>
          );
        })}
      {modalShow && (
        <AddAlarmModal
          modalShow={modalShow}
          index={selectedIndex}
          setModalOpen={setModalOpen}
        />
      )}
      <ToastContainer />
    </>
  );
};

export default AlarmDetails;
