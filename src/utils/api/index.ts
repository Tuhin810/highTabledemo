import { signupCustomer, userLogin } from "./auth/login";
import { createRoom, getChatList } from "./chat/chat";
import {
  commentContent,
  contentCreation,
  getComments,
  getContent,
  likeContent,
} from "./contentCreation/content.api";
import { closeLiveRoom, createLiveRoom, getStreamList } from "./livestream/livestream";
import {
  editUserProfileDetails,
  uploadProfileCoverPicture,
} from "./user/uploadUserImages";
import {
  getUser,
  getUserDetailsWithContent,
  getUserLatestContent,
  followUser,
  getFollowers,
  searchUserByName,
  getOnlyUser,
} from "./user/usersInfo";

export const api = {
  auth: {
    userLogin,
    signupCustomer,
  },
  user: {
    uploadProfileCoverPicture,
    editUserProfileDetails,
    getUser,
    getUserDetailsWithContent,
    getUserLatestContent,
    followUser,
    getOnlyUser,
    getFollowers,
    searchUserByName,
  },
  content: {
    contentCreation,
    getContent,
    likeContent,
    commentContent,
    getComments,
  },
  chat:{
    getChatList,
    createRoom
  },
  livestream:{
    createLiveRoom,
    getStreamList,
    closeLiveRoom
  }
};
