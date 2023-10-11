import images from '../AAssets/images';
import strings from '../i18n/strings';
import {StackNav} from '../navigation/NavigationKeys';

const renderChips = [
  'Action',
  'Drama',
  'Comedy',
  'Ecchi',
  'Adventure',
  'Mecha',
  'Romance',
  'Fantasy',
  'Horror',
  'Mystery',
  'Psychological',
  'Sci-Fi',
  'Slice of Life',
  'Sports',
  'Thriller',
  'Supernatural',
  'Historical',
  'Music',
  'Game',
  'Harem',
];

const editProfileData = [
  {
    title: 'About You',
    data: [
      {
        id: 1,
        icon: 'person-outline',
        type: 'Name',
        value: 'Andrew Ainsley',
      },
      {
        id: 2,
        icon: 'mail-outline',
        type: 'Username',
        value: 'ans@gmail.com',
      },
      {
        id: 3,
        icon: 'call-outline',
        type: 'Bio',
        value: 'Designer',
      },
    ],
  },
  {
    title: 'Social',
    data: [
      {
        id: 1,
        icon: 'logo-facebook',
        type: 'Facebook',
        value: 'facebook.com',
      },
      {
        id: 2,
        icon: 'logo-twitter',
        type: 'Twitter',
        value: 'w.twitter.com',
      },
      {
        id: 3,
        icon: 'logo-instagram',
        type: 'Instagram',
        value: 'htinstagram.com',
      },
    ],
  },
];

const manageAccData = [
  {
    title: 'Account Information',
    data: [
      {
        id: 1,
        icon: 'call-outline',
        type: 'Phone Number',
        value: '+1 111 467 378',
      },
      {
        id: 2,
        icon: 'mail-outline',
        type: 'Email',
        value: 'ans@gmail.com',
      },
      {
        id: 3,
        icon: 'calendar-outline',
        type: 'Date of Birth',
        value: '12/27/1995',
        rightIcon: 'calendar-outline',
      },
    ],
  },
  {
    title: 'Account Control',
    data: [
      {
        id: 1,
        icon: 'swap-vertical-outline',
        type: 'Switch to Business Account',
      },
      {
        id: 2,
        icon: 'trash-outline',
        type: 'Delete Account',
        trash: true,
      },
    ],
  },
];

const headerCategoryData = [
  {
    id: 1,
    type: 'All Activity',
    icon: 'time-outline',
  },
  {
    id: 2,
    type: 'Likes',
    icon: 'heart-outline',
  },
  
];

const inboxData = [
  {
    title: 'Today',
    data: [
      {
        id: 1,
        name: 'Charolette Hanlin',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        follow: 'Follow',
        profileImage: 'https://i.ibb.co/xjLGscf/user1.png',
      },
      {
        id: 2,
        name: 'Annabel Rohan',
        desc: 'Started following you',
        follow: 'Follow Back',
        profileImage: 'https://i.ibb.co/4JhzfZ6/user7.png',
      },
      {
        id: 3,
        name: 'Sanjuanita Ordonez',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        profileImage: 'https://i.ibb.co/CtJMsKk/user3.png',
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      {
        id: 1,
        name: 'Rayford Chenail Hanlin',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        follow: 'Follow',
        profileImage: 'https://i.ibb.co/9psxy8J/user4.png',
      },
      {
        id: 2,
        name: 'Sanjuanita Rohan',
        desc: 'Started following you',
        profileImage: 'https://i.ibb.co/Z2BtDcm/user5.png',
      },
      {
        id: 3,
        name: 'Annabel Ordonez',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        follow: 'Follow Back',
        profileImage: 'https://i.ibb.co/J3q5m54/user6.png',
      },
    ],
  },
  {
    title: 'Last Week',
    data: [
      {
        id: 1,
        name: 'Charolette Hanlin',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        profileImage: 'https://i.ibb.co/N2hx6tN/user2.png',
      }
      ,
      ,
      ,
    ],
  },
];

const ProfileSetting = [
  {
    id: 1,
    title: strings.editProfile,
    icon: 'person-outline',
    route: StackNav.ManageAccount,
  },
  {
    id: 2,
    title: strings.privacy,
    icon: 'lock-closed-outline',
    route: StackNav.Privacy,
  },
];

const helperCategoryData = [
  'General',
  'Account',
  'Payment',
  'Subscription',
  'Others',
];

const helperData = [
  {
    title: 'What is Instagram?',
    description:
      'Instagram is a streaming service that offers a wide variety of anime titles.',
  },
];

const contactUsData = [
  {
    id: 1,
    title: 'Contact Us',
    icon: 'headset',
  },
];

const languageData = [
  {
    title: 'Suggested',
    data: [{lnName: 'English(US)'}, {lnName: 'English(UK)'}],
  },
  {
    title: 'Language',
    data: [
      {
        lnName: 'English',
      },
      {
        lnName: 'Spanish',
      },
    ],
  },
];

const reportData = [
  {
    lnName: 'Dangerous organizations/individuals',
  },
];

const privacyPolicyData = [
  {
    title: strings.privacyPolicy1,
    description: strings.privacyPolicyDesc,
  },
];

const messageDataList = [
  {
    id: 1,
    name: 'John Doe',
    message: 'Hello, how are you?',
    time: '12:00',
    imageUrl: 'https://i.ibb.co/xjLGscf/user1.png',
    pending: 2,
  }
];

const recenltyDataList = [
  {
    id: 1,
    name: 'John Doe',
    imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
];

const videoData = [
  {
    id: 1,
    channelName: 'Rashmika_Mandanna',
    uri: 'https://user-images.githubusercontent.com/129170600/231968235-a6a60f18-6b50-459d-8c7c-9716d9df0730.mp4',
    caption:
      'Rashmika Mandanna is an Indian actress and model who works in Telugu and Kannada films. She made her acting debut in the Kannada film Cheluvi (2011).',
    musicName: 'Song #1',
    likes: '10.2M',
    comments: '284K',

    bookmark: '120K',
    share: '1.2M',
    categoty: 'Entertainment',
    avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
    poster:
      'https://user-images.githubusercontent.com/129170600/231969719-2cd83643-5b10-4d41-98c5-d0c0d939bfd7.jpg',
    views: '21.2M',
  },
  
];

const userStoryData = [
  {
    content:
      'https://user-images.githubusercontent.com/129170600/231968235-a6a60f18-6b50-459d-8c7c-9716d9df0730.mp4',
    type: 'video',
    finish: 0,
  },
  
];

const soundTrendingData = [
  {
    id: 1,
    title: 'Favorite Girl',
    artist: 'Justin Bieber',
    imgUrl: 'https://picsum.photos/200/300',
    time: '3:20',
    totalViews: '240M',
    artistUrl: 'https://picsum.photos/200/300',
    artistDesc: 'Justin Drew Bieber is a Canadian singer and songwriter.',
  },
  
];

const hashtagTreandingData = [
  {
    id: 1,
    title: 'amazingfood',
    imgUrl: 'https://picsum.photos/200/300',
    totalHashTag: '827.5M',
  },
  
];

const chatData = [
  {
    id: 1,
    message: 'Hi Theresa, good morning 😄',
    time: '12:00',
    type: 'sender',
  },
];

const searchVideoData = [
  {
    id: 1,
    reelImgUrl: 'https://picsum.photos/200/300',
    views: '1.2M',
    userName: 'Sophie Brown',
  },
];

const searchMusicData = [
  {
    id: 1,
    title: 'Favorite Girl',
    artist: 'Justin Bieber',
    imgUrl: 'https://picsum.photos/200/300',
    time: '3:20',
    totalViews: '240M',
    artistUrl: 'https://picsum.photos/200/300',
  },
];

const userDetail = [
  {
    id: 1,
    name: 'Dracel Steward',
    description: 'arianacooper | 24.5M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    isFollow: false,
  },
];

const savedStorys = [
  {
    id: 1,
    name: 'Hangout',
    description: 'arianacooper | 24.5M followers',
    imgUrl:
      'https://images.unsplash.com/photo-1501238295340-c810d3c156d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    isFollow: false,
  },
];

const liveChat = [
  {
    name: 'Dracel Steward',
    message: 'Hi Theresa, good morning 😄',
    imgUrl:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    isFollow: false,
  },
];

const hashtagDetail = [
  {
    id: 1,
    views: '1.2M',
    title: 'amazingfood',
  }
  ,
  ,
  ,
  ,
];

const searchCategoryData = [
  {
    id: 0,
    title: strings.top,
  },
  {
    id: 1,
    title: strings.user,
  }
  ,
  ,
  ,
  ,

];

const findFriendsData = [
  {
    id: 1,
    title: 'Invite Friends',
    icon: 'arrow-redo',
    description: 'Invite friends to join',
    btn: 'Invite',
  },
  {
    id: 2,
    title: 'Contacts',
    icon: 'people',
    description: 'Find your contacts',
    btn: 'Find',
  },
];

const UserDetailCategory = [
  {
    title: strings.post,
    value: '247',
  },
  {
    title: strings.followers,
    value: '368K',
  },
  {
    title: strings.following,
    value: '374',
  },
];

const commentData = [
  {
    name: 'Dracel Steward',
    description: 'What is your favorite fruit?',
    imgUrl:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    commentLike: '1.1K',
  },
  {
    name: 'John Doe',
    description: 'Do you have any pet peeves?',
    imgUrl:
      'https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    commentLike: '974',
  },
];

const postData = [
  {
    id: '1',
    name: 'John Doe',
    subtitle: '2 hours ago',
    profileImage:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    images: [
      'https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg',
    ],
  },
  {
    id: '2',
    name: 'Jane Doe',
    subtitle: '3 hours ago',
    profileImage:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    images: [
      'https://images.pexels.com/photos/247878/pexels-photo-247878.jpeg',
      'https://images.pexels.com/photos/247932/pexels-photo-247932.jpeg',
    ],
  },
];

// const searchVideoData = [

export {
  renderChips,
  ProfileSetting,
  
  inboxData,
  videoData,
  reportData,
  manageAccData,
  messageDataList,
  recenltyDataList,
  soundTrendingData,
  hashtagTreandingData,
  chatData,
  userDetail,
  savedStorys,
  searchVideoData,
  searchMusicData,
  hashtagDetail,
  searchCategoryData,
  findFriendsData,
  liveChat,
  UserDetailCategory,
  commentData,
  userStoryData,
  postData,
};




UserDetail
    PostData[]
        |
        VideoData
        ImageData
        CommentData
        HashtagDetail
        |

PostData
    VideoData
    ImageData
    CommentData
    HashtagDetail

MSG
MessageDataList
    ChatData
    InboxData


recenltyDataList

Stories
    userStoryData
    savedStories


    editProfileData



    renderChips,
    ProfileSetting,
    helperCategoryData,
    helperData,
    contactUsData,
    languageData,
    privacyPolicyData,
    
    headerCategoryData,
    inboxData,
    videoData,
    reportData,
    manageAccData,
    messageDataList,
    recenltyDataList,
    soundTrendingData,
    hashtagTreandingData,
    chatData,
    userDetail,
    hashtagDetail,
    findFriendsData,
    liveChat,
    UserDetailCategory,x
    postData,



    
ZZZZZZZZZZ
    helperCategoryData,
    helperData,
    contactUsData,
    languageData,
    privacyPolicyData,
    editProfileData,
    headerCategoryData,
