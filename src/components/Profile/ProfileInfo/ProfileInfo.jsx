import Style from "./ProfileInfo.module.css";
import React from "react";
import users from "./../../../assets/users.jpg";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const FileUploader = ({ savePhoto }) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <>
            <input
                type={"file"}
                name={"file"}
                id="id"
                style={{ display: "none" }}
                onChange={onMainPhotoSelected}
            />
            <label htmlFor={"id"} className={Style.uploadFile}>
                Загрузить фото
            </label>
        </>
    );
};

const ProfilePhoto = ({ profile, isOwner, savePhoto }) => (
    <>
        <img
            src={
                profile.profile !== null && profile.profile.photos.large !== null
                    ? profile.profile.photos.large
                    : users
            }
            alt=""
        />
        {isOwner && <FileUploader savePhoto={savePhoto} />}
    </>
);

const ProfileInfo = ({ status, updateStatus, profile, isOwner, savePhoto }) => (
    <div className="">
        <div className={Style.descriptionBlock}>
            <div className={Style.profileLogo}>
                <ProfilePhoto profile={profile} isOwner={isOwner} savePhoto={savePhoto} />
            </div>
            <div className="">
                <ProfileStatusWithHook status={status} updateStatus={updateStatus} />
            </div>
        </div>
    </div>
);

export default ProfileInfo;
