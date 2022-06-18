import s from './ProfileInfo.module.css'
import React, {useEffect, useState} from 'react'

const ProfileStatusWithHook = (props) => {
    console.log(props)
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.status}>
            <p>Статус: </p>
            {!editMode &&
                <div className={s.statusInput}>
                    {props.status !== null ?  <p onDoubleClick={activateEditMode}>{props.status}</p>: <p>Пустой статус</p> }
                </div>
            }
            {editMode &&
                <div className={s.statusSpan}>
                    <input value={status} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}/>
                </div>
            }
        </div>
    )

}

export default ProfileStatusWithHook