import React, {useState} from 'react'
import AddAlarmModal from '../addAlarmModal/addAlarmModal'

const AlarmButton = () => {
    const [modalOpen, setModalOpen] = useState<Boolean>(false)
  return (
    <div>
      <div className='col-12 float-end d-flex justify-content-end'>
        <button className='btn btn-success' onClick={() => setModalOpen((prev)=> !prev)}>
            + Alarm
        </button>
      </div>
      {modalOpen && <AddAlarmModal setModalOpen={setModalOpen}/>}
    </div>
  )
}

export default AlarmButton
