import React from "react";
import "../style/profile.css";
import Profile from "../asset/profilePic.jpg";
import ProfilePostCard from "../components/ProfilePostCard";
import Button from "../components/Button";

function profiles() {
  return (
    <div className="profile-main">
      <h1 className="heading">Codhersgram</h1>
      <div className="profile">
        <div
          className="profile__image"
          style={{ backgroundImage: `url(${Profile})` }}
        ></div>
        <div>
          <div className="profile__info">
            <div className="profile__name">Hemant Bajaj</div>
            <div className="profile__position">Senior software developer</div>
          </div>
          <div className="profile__details">
            <div className="profile__details__followers">
              <div>
                <div>890</div>
                <div>followers</div>
              </div>
              <div>
                <div>890</div>
                <div>followers</div>
              </div>
            </div>
            <Button name="Follow" src="/" />
          </div>
        </div>
      </div>

      <div className="profile__post">
        <h2>Posts</h2>

        <div className="profile__post__card__container">
          <ProfilePostCard />
          <ProfilePostCard />
          <ProfilePostCard />
          <ProfilePostCard />
          <ProfilePostCard />
        </div>
      </div>
    </div>
  );
}
export default profiles;
