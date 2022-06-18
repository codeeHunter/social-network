import s from './ProfileInfo.module.css'
import React from 'react'
import users from './../../../assets/users.jpg'
import ProfileStatusWithHook from "./ProfileStatusWithHook";


const FileUploader = ({savePhoto}) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <>
            <input type={'file'} name={"file"} id="id" style={{display: 'none'}}
                   onChange={onMainPhotoSelected}/>
            <label htmlFor={"id"} className={s.uploadFile}>Загрузить фото</label>
        </>
    );
}

const ProfileInfo = ({status, updateStatus, profile, isOwner}) => {
    return (
        <div className="">
            <div className={s.descriptionBlock}>
                <div className={s.profileLogo}>
                    <img src={profile.profile ? profile.profile.photos.large : users} alt=""/>
                    {isOwner && <FileUploader />}
                </div>
                <div className="">
                    <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo