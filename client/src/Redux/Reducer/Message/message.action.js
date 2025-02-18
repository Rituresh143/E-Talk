import axios from "axios";
import {
  SEND_MESSAGE,
  GET_ALL_MESSAGE,
  UPDATE_GET_ALL_MESSAGE,
} from "./message.type";

// get all messages
export const getAllChats = (selectedChat) => async (dispatch) => {
  try {
    const allMessage = await axios({
      method: "GET",
      url: `http://localhost:4000/api/message/${selectedChat._id}`,
    });
    console.log(allMessage);
    return dispatch({ type: GET_ALL_MESSAGE, payload: allMessage.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
  //   }
};

// updateing get all message
export const updateGetAllChats = (messageRecived) => async (dispatch) => {
  try {
    console.log(messageRecived);
    if(!messageRecived.sender){
      return ;
    }
    const updatedAllMessage = messageRecived;
    return dispatch({
      type: UPDATE_GET_ALL_MESSAGE,
      payload: updatedAllMessage,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

// send message
export const sendMessge = (messageData) => async (dispatch) => {
  try {
    const newMessage = await axios({
      method: "POSt",
      url: `http://localhost:4000/api/message`,
      data: { ...messageData },
    });

    return dispatch({ type: SEND_MESSAGE, payload: newMessage.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

// clear all message
export const clearSelectedMessage = () => async (dispatch) => {
  try {
    return dispatch({
      type: "CLEAR_ALL_MESSAGE",
      payload: "",
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
