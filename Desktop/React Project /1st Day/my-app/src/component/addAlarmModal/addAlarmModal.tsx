import React, { Dispatch, useState, useEffect } from "react";
import "./addAlarmModal.css";
import { useAppSelector, useAppDispatch } from "../../hooks/selectorDispatch";
import { addAlarm, updateAlarm } from "../../slice/indexSlice";

interface propsType {
  setModalOpen:
    | Dispatch<React.SetStateAction<boolean>>
    | Dispatch<React.SetStateAction<Boolean>>;
  index?: number;
  modalShow?: boolean;
}

const AddAlarmModal = ({ setModalOpen, index, modalShow }: propsType) => {
  const dispatch = useAppDispatch();
  const [timer, setTimer] = useState<string>("00:00");

  const timerData = useAppSelector((state) => state.alaramTimer);

  const updateTimeChanges = (e: string | any) => {
    setTimer(e.target.value);
  };

  const setAlarm = () => {
    if (!timer) {
      alert("Add time first");
      return;
    }
    dispatch(addAlarm({ value: timer, active: true }));
    setModalOpen((prev: boolean | Boolean)  => !prev)
  };

  

  useEffect(() => {
    let value:any;
    if (modalShow) {
     value = timerData.filter((item, indexs) => index === indexs);
      console.log(
        value[0].value,
        "value",
        index,
        "index",
        timerData,
        "timerData"
      );
    }

    if (modalShow && value) {
      setTimer(value[0].value);
    }
  }, []);

  const handleUpdateAlarm = () => {
    if (typeof index === "number") {
      dispatch(updateAlarm({
        index: index,
        value: timer,
        active: true,
      }));
    }
    setModalOpen((prev: boolean | Boolean)  => !prev)
  };


  return (
    <>
      <div
        className="modal-backdrop show"
        style={{ backdropFilter: "blur(8px)" }}
      ></div>
      <div
        className="modal fade show"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex={-1}
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Add Alarm
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setModalOpen((prev: boolean | Boolean) => !prev)}
              ></button>
            </div>
            <div className="modal-body">
              <input
                id="appt-time"
                className="d-block"
                type="time"
                name={timer}
                value={timer}
                onChange={updateTimeChanges}
              />
              {modalShow ? (
                <button
                  className="btn btn-secondary d-block"
                  onClick={handleUpdateAlarm}
                >
                  Update Alarm
                </button>
              ) : (
                <button
                  className="btn btn-secondary d-block"
                  onClick={setAlarm}
                >
                  Add Alarm
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAlarmModal;
