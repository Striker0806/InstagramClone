// Tab Routes
import Home    from '../containers/TabBar/home/Home'      ;
import Inbox   from '../containers/TabBar/inbox/Inbox'    ;
import Profile from '../containers/TabBar/profile/Profile';

// // Authorisation Screens Route
import Splash            from '../containers/Authorization/Splash'  ;
import Register          from '../containers/Authorization/Register'; 
import Login             from '../containers/Authorization/Login'   ;
import ForgotPassword    from '../containers/Authorization/ForgotPassword'   ;
import ForgotPasswordOtp from '../containers/Authorization/ForgotPasswordOtp';
import CreateNewPassword from '../containers/Authorization/CreateNewPassword';
import Connect           from '../containers/Authorization/Connect'   ;
import SetUpProfile      from '../containers/Authorization/SetUpProfile';
import SetPin            from '../containers/Authorization/SetPin'      ;
import SetSecure         from '../containers/Authorization/SetSecure';
import FollowSomeone     from '../containers/Authorization/FollowSomeone';


// // Search Screens
import Search        from '../containers/TabBar/home/Seach/Search'     ;
import SearchTop     from '../containers/TabBar/home/Seach/SearchTop'  ;
import SearchVideo   from '../containers/TabBar/home/Seach/SearchVideo';
import SearchSound   from '../containers/TabBar/home/Seach/SearchSound';
import SearchUser    from '../containers/TabBar/home/Seach/SearchUser' ;
import SearchLive    from '../containers/TabBar/home/Seach/SearchLive' ;
import SearchHashtag from '../containers/TabBar/home/Seach/SearchHashtag';


// // Discover Screens
import SoundCategory    from '../containers/TabBar/discover/SoundCategory'  ;
import HashtagCategory  from '../containers/TabBar/discover/HashtagCategory';
import TrendingSound    from '../containers/TabBar/discover/TrendingSound'  ;
import TrendingHashtag  from '../containers/TabBar/discover/TrendingHashtag';
import Discover         from '../containers/TabBar/discover/Discover';


//// Reel Videos Related
import ReelsComponent from '../containers/TabBar/home/ReelsComponent';
import Shorts         from '../containers/TabBar/home/ReelsComponent';
import StoryView      from '../containers/TabBar/home/UserStory/StoryView';




import Message     from '../containers/TabBar/inbox/Message';
import Chat        from '../containers/TabBar/inbox/Chat';
import Call        from '../containers/TabBar/inbox/Call';
import Sound       from '../containers/TabBar/home/Sound' ;
import Report      from '../containers/TabBar/home/Report';




import TabBar        from './Type/TabBarNavigation';
import OnBoarding    from '../containers/OnBoarding';

////TAB Bar Profile
import Privacy       from '../containers/TabBar/profile/Privacy';
import PrivacyPolicy from '../containers/TabBar/profile/PrivacyPolicy';
import HelpCenter    from '../containers/TabBar/profile/HelpCenter';
import Security      from '../containers/TabBar/profile/Security';
import Language      from '../containers/TabBar/profile/Language';
import Setting       from '../containers/TabBar/profile/Setting' ;
import EditProfile   from '../containers/TabBar/profile/EditProfile';
import ManageAccount from '../containers/TabBar/profile/ManageAccount'    ;
import QrCode        from '../containers/TabBar/profile/QrCode';
import FindFriends   from '../containers/TabBar/profile/FindFriends';



// // User Profile Screens
import ProfileDetail from '../containers/TabBar/home/userDetail/ProfileDetail';
import Suggested     from '../containers/TabBar/home/userDetail/Suggested';
import Following     from '../containers/TabBar/home/userDetail/Following';
import Follower      from '../containers/TabBar/home/userDetail/Follower' ;
import UserNetwork   from '../containers/TabBar/home/userDetail/UserNetwork';
import Live          from '../containers/TabBar/home/Live';



import PostDetail    from '../containers/TabBar/add/PostDetail';
import PostSound     from '../containers/TabBar/add/PostSound' ;

export const TabRoute = {
  Home,
  Profile,
  Discover,
  Shorts,
};

export const StackRoute = {
  Login,
  Splash,
  Register,
  TabBar,
  OnBoarding,
  Connect,
  SetPin,
  SetUpProfile,
  SetSecure,
  ForgotPassword,
  ForgotPasswordOtp,
  CreateNewPassword,
  Setting,
  Privacy,
  PrivacyPolicy,
  HelpCenter,
  Security,
  Language,
  EditProfile,
  Message,
  Chat,
  Call,
  Sound,
  Report,
  ProfileDetail,
  Suggested,
  Following,
  Follower,
  ManageAccount,
  QrCode,
  SoundCategory,
  HashtagCategory,
  TrendingSound,
  TrendingHashtag,
  Search,
  SearchTop,
  SearchVideo,
  SearchSound,
  SearchUser,
  SearchLive,
  SearchHashtag,
  UserNetwork,
  PostDetail,
  PostSound,
  ReelsComponent,
  FindFriends,
  Live,
  FollowSomeone,
  Inbox,
  StoryView,
};
