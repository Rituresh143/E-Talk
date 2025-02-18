import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  getSender,
  getSenderPic,
} from "../../HelperFunction/chat.Helper";
import GroupProfile from "../GroupProfile";
import Profile from "../Profile";

const UserProfile = ({closeModal}) => {
  const senderUser = useSelector(
    (globalState) => globalState.chat.selectedChat
  );
  const loggedUser = useSelector((globalState) => globalState.user.userDetails);

  const [sender, setSender] = useState("");

  console.log(sender);
  useEffect(() => {
    setSender(senderUser);
  }, [senderUser]);

  return sender ? (
    <>
      <Wrapper className="sidebar w-full h-full flex justify-center ">
        {/* <div className="overflow-hidden sidebar-active">
          <div className="contact-profile p-10">
            <div className="p-1 flex items-center justify-end cursor-pointer">
              <div
                className="p-1 bg-white text-black rounded-full"
                onClick={props.closeModal}
              >
                <RxCross2 />
              </div>
            </div>

            <div className="details">
              <div className="user-profile-image m-auto flex justify-center items-center rounded-full overflow-hidden">
                <img
                  src={
                    !sender.isGroupChat
                      ? getSenderPic(loggedUser, sender.users)
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6wQvepXb0gM_Ft1QUOs6UyYJjPOmA-gq5Yw&usqp=CAU"
                  }
                  alt=""
                />
              </div>
              <div className="name">
                {sender.isGroupChat
                  ? sender.chatName
                  : getSender(loggedUser, sender.users)}
              </div>
              <div className="about">
                <div>About</div>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div className="email">
                <div>Email</div>
                <p>xyz@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="document"></div>
          <div className="media-gallery"></div>
        </div> */}

        {/* need to change */}
        <div>
          {!sender.isGroupChat ? (
            <>
              {/* sender profile  */}
              <div className="sender-profile overflow-hidden sidebar-active w-full h-full">
                <Profile
                  pic={
                    !sender.isGroupChat
                      ? getSenderPic(loggedUser, sender.users)
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6wQvepXb0gM_Ft1QUOs6UyYJjPOmA-gq5Yw&usqp=CAU"
                  }
                  name={
                    sender.isGroupChat
                      ? sender.chatName
                      : getSender(loggedUser, sender.users)
                  }
                  email={!sender.isGroupChat ? sender.users[1].email : ""}
                  about={!sender.isGroupChat ? sender.users[1].about : ""}
                  contact={!sender.isGroupChat ? sender.users[1].contact : ""}
                  closeModal={closeModal}
                />
              </div>
            </>
          ) : (
            <>
              {/* Group profile  */}
              {/* group name , */}
              <div className=" sender-profile overflow-hidden sidebar-active w-full h-full">
               <GroupProfile sender={sender} loggedUser={loggedUser} closeModal={closeModal} />
              </div>
            </>
          )}
        </div>
      </Wrapper>
    </>
  ) : (
    ""
  );
};

export default UserProfile;

const Wrapper = styled.section`
  .sender-profile {
    overflow-y: scroll;
    height: 100vh;
    .profile-tab {
      animation: none;
    }
    .chat-menu {
      margin-top: 2rem;
      padding-left: 2rem;
      padding-right: 2rem;
      .icon {
        display: flex;
      }
    }
    .user-details {
      overflow: hidden;
      height: 100%;
    }
    .details {
      .user-profile-image {
        width: 200px;
        height: 200px;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
`;
