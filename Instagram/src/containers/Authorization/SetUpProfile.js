// Libraries import
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React, { createRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-element-dropdown';
import ImagePicker from 'react-native-image-crop-picker';
import CountryPicker, {
  FlagButton,
  DARK_THEME,
  DEFAULT_THEME,
} from 'react-native-country-picker-modal';

// Local import
import ZSafeAreaView from '../../components/common/ZSafeAreaView';
import ZHeader from '../../components/common/ZHeader';
import strings from '../../i18n/strings';
import images from '../../AAssets/images';
import { styles } from '../../themes';
import { GenderData, getHeight, moderateScale } from '../../common/constants';
import ZInput from '../../components/common/ZInput';
import ZKeyBoardAvoidWrapper from '../../components/common/ZKeyBoardAvoidWrapper';
import { StackNav } from '../../navigation/NavigationKeys';
import ProfilePicture from '../../components/models/ProfilePicture';
import ZButton from '../../components/common/ZButton';

const SetUpProfile = props => {
  const { navigation } = props;
  const headerTitle = props.route.params.title;

  const colors = useSelector(state => state.theme.theme);
  const ProfilePictureSheetRef = createRef();

  const BlurredStyle = {
    backgroundColor: colors.inputBg,
    borderColor: colors.bColor,
  };
  const FocusedStyle = {
    backgroundColor: colors.inputFocusColor,
    borderColor: colors.primary,
  };
  const BlurredIconStyle = colors.grayScale5;
  const FocusedIconStyle = colors.primary;

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [nickname, setNickname] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');

  const [emailInputStyle, setEmailInputStyle] = useState(BlurredStyle);
  const [fullNameInputStyle, setFullNameInputStyle] = useState(BlurredStyle);
  const [phoneNoInputStyle, setPhoneNoInputStyle] = useState(BlurredStyle);
  const [nicknameInputStyle, setNicknameInputStyle] = useState(BlurredStyle);
  const [occupationInputStyle, setOccupationInputStyle] =
    useState(BlurredStyle);
  const [emailIcon, setEmailIcon] = useState(BlurredIconStyle);
  const [chevronDown, setChevronDown] = useState(BlurredIconStyle);

  const [selectImage, setSelectImage] = useState('');
  const [callingCodeLib, setCallingCodeLib] = useState(+91);
  const [countryCodeLib, setCountryCodeLib] = useState('IN');
  const [visiblePiker, setVisiblePiker] = useState(false);

  const onFocusInput = onHighlight => onHighlight(FocusedStyle);
  const onFocusIcon = onHighlight => onHighlight(FocusedIconStyle);
  const onBlurInput = onUnHighlight => onUnHighlight(BlurredStyle);
  const onBlurIcon = onUnHighlight => onUnHighlight(BlurredIconStyle);

  const onFocusEmail = () => {
    onFocusInput(setEmailInputStyle);
    onFocusIcon(setEmailIcon);
  };
  const onBlurEmail = () => {
    onBlurInput(setEmailInputStyle);
    onBlurIcon(setEmailIcon);
  };

  const onFocusFullName = () => onFocusInput(setFullNameInputStyle);
  const onFocusNickName = () => onFocusInput(setNicknameInputStyle);
  const onFocusPhoneNo = () => {
    onFocusInput(setPhoneNoInputStyle);
    onFocusIcon(setChevronDown);
  };
  const onFocusOccupation = () => onFocusInput(setOccupationInputStyle);

  const onBlurFullName = () => onBlurInput(setFullNameInputStyle);
  const onBlurNickName = () => onBlurInput(setNicknameInputStyle);
  const onBlurPhoneNo = () => {
    onBlurInput(setPhoneNoInputStyle);
    onBlurIcon(setChevronDown);
  };
  const onBlurOccupation = () => onBlurInput(setOccupationInputStyle);

  const onChangedFullName = text => setFullName(text);
  const onChangedNickName = text => setNickname(text);
  const onChangedPhoneNo = text => setPhoneNo(text);
  const onChangedEmail = text => setEmail(text);
  const onChangedGender = text => setGender(text.value.toLowerCase());
  const onChangedOccupation = text => setOccupation(text);

  useEffect(() => {
    ProfilePictureSheetRef?.current?.hide();
  }, [selectImage]);

  const onSelectCountry = country => {
    setCountryCodeLib(country.cca2);
    setCallingCodeLib('+' + country.callingCode[0]);
    closeCountryPicker();
  };

  const openCountryPicker = () => setVisiblePiker(true);
  const closeCountryPicker = () => setVisiblePiker(false);

  const onPressCamera = () => {
    ImagePicker.openCamera({
      // cropping: true,
      mediaType: 'photo',
      includeBase64: true,
    }).then(image => {
      setSelectImage(image);
    });
  };

  const onPressGallery = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      includeBase64: true,
    }).then(images => {
      setSelectImage(images);
    });
  };

  const EmailIcon = () => (
    <Ionicons name="mail" size={moderateScale(20)} color={emailIcon} />
  );

  const countryIcon = () => {
    return (
      <View style={styles.rowSpaceBetween}>
        <FlagButton
          value={callingCodeLib}
          onOpen={openCountryPicker}
          withEmoji={true}
          countryCode={countryCodeLib}
          withCallingCodeButton={true}
          containerButtonStyle={localStyles.countryPickerButton}
        />
        <Ionicons
          name="chevron-down-outline"
          size={moderateScale(20)}
          color={chevronDown}
        />
      </View>
    );
  };

  const onPressUpdate = () => { };

  const onPressContinue = () => navigation.navigate(StackNav.FollowSomeone);

  const onPressProfilePic = () => ProfilePictureSheetRef?.current.show();

  return (
    <ZSafeAreaView>
      <ZHeader title={headerTitle} />
      <ZKeyBoardAvoidWrapper containerStyle={[styles.p20]}>
        <TouchableOpacity
          onPress={onPressProfilePic}
          style={[styles.selfCenter, styles.mb20]}>
          {!!selectImage?.path ? (
            <Image
              source={{ uri: selectImage?.path }}
              style={localStyles.userImage}
            />
          ) : (
            <Image
              source={colors.dark ? images.userDark : images.userLight}
              style={localStyles.userImage}
            />
          )}
          <MaterialIcon
            name="pencil-box"
            size={moderateScale(30)}
            color={colors.primary}
            style={localStyles.editIcon}
          />
        </TouchableOpacity>

        <ZInput
          placeHolder={strings.fullName}
          _value={fullName}
          autoCapitalize={'none'}
          toGetTextFieldValue={onChangedFullName}
          inputContainerStyle={[
            { backgroundColor: colors.inputBg },
            localStyles.inputContainerStyle,
            fullNameInputStyle,
          ]}
          _onFocus={onFocusFullName}
          onBlur={onBlurFullName}
        />
        <ZInput
          placeHolder={strings.username}
          _value={nickname}
          autoCapitalize={'none'}
          toGetTextFieldValue={onChangedNickName}
          inputContainerStyle={[
            { backgroundColor: colors.inputBg },
            localStyles.inputContainerStyle,
            nicknameInputStyle,
          ]}
          _onFocus={onFocusNickName}
          onBlur={onBlurNickName}
        />
        <ZInput
          placeHolder={strings.email}
          keyBoardType={'email-address'}
          _value={email}
          autoCapitalize={'none'}
          toGetTextFieldValue={onChangedEmail}
          rightAccessory={() => <EmailIcon />}
          inputContainerStyle={[
            { backgroundColor: colors.inputBg },
            localStyles.inputContainerStyle,
            emailInputStyle,
          ]}
          _onFocus={onFocusEmail}
          onBlur={onBlurEmail}
        />
        <ZInput
          placeHolder={strings.phoneNumber}
          keyBoardType={'number-pad'}
          _value={phoneNo}
          _maxLength={10}
          toGetTextFieldValue={onChangedPhoneNo}
          insideLeftIcon={countryIcon}
          inputContainerStyle={[
            { backgroundColor: colors.inputBg },
            localStyles.inputContainerStyle,
            phoneNoInputStyle,
          ]}
          _onFocus={onFocusPhoneNo}
          onBlur={onBlurPhoneNo}
        />
        <Dropdown
          style={[
            localStyles.dropdownStyle,
            {
              backgroundColor: colors.inputBg,
              borderColor: colors.inputBg,
              color: colors.white,
            },
          ]}
          placeholderStyle={{ color: colors.grayScale5 }}
          data={GenderData}
          maxHeight={moderateScale(180)}
          labelField="label"
          valueField="value"
          placeholder={strings.gender}
          value={gender}
          itemTextStyle={{
            color: colors.textColor,
            fontSize: moderateScale(16),
          }}
          onChange={onChangedGender}
          selectedTextStyle={{
            color: colors.textColor,
          }}
          itemContainerStyle={{
            backgroundColor: colors.inputBg,
          }}
          activeColor={colors.inputBg}
        />
        <ZInput
          placeHolder={strings.occupation}
          _value={occupation}
          autoCapitalize={'none'}
          toGetTextFieldValue={onChangedOccupation}
          inputContainerStyle={[
            { backgroundColor: colors.inputBg },
            localStyles.inputContainerStyle,
            occupationInputStyle,
          ]}
          _onFocus={onFocusOccupation}
          onBlur={onBlurOccupation}
        />
      </ZKeyBoardAvoidWrapper>
      {!!(headerTitle === strings.editProfile) ? (
        <ZButton
          textType={'b18'}
          color={colors.white}
          title={strings.update}
          onPress={onPressUpdate}
          containerStyle={styles.m20}
        />
      ) : (
        <View style={localStyles.btnContainer}>
          <ZButton
            title={strings.continue}
            textType={'b18'}
            color={colors.white}
            containerStyle={[localStyles.skipBtnContainer]}
            onPress={onPressContinue}
          />
        </View>
      )}
      <ProfilePicture
        onPressCamera={onPressCamera}
        onPressGallery={onPressGallery}
        SheetRef={ProfilePictureSheetRef}
      />
      <CountryPicker
        countryCode={'IN'}
        withFilter={true}
        visible={visiblePiker}
        withFlag={true}
        withFlagButton={true}
        onSelect={country => onSelectCountry(country)}
        withCallingCode={true}
        withAlphaFilter={true}
        withCountryNameButton={true}
        onClose={closeCountryPicker}
        renderFlagButton={() => {
          return null;
        }}
        theme={colors.dark ? DARK_THEME : DEFAULT_THEME}
      />
    </ZSafeAreaView>
  );
};

export default SetUpProfile;

const localStyles = StyleSheet.create({
  userImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  inputContainerStyle: {
    height: getHeight(60),
    borderRadius: moderateScale(12),
    borderWidth: moderateScale(1),
    ...styles.ph15,
  },
  dropdownStyle: {
    height: getHeight(60),
    borderRadius: moderateScale(12),
    borderWidth: moderateScale(1),
    ...styles.ph25,
    ...styles.mt15,
  },
  btnContainer: {
    ...styles.p20,
    ...styles.rowSpaceAround,
  },
  skipBtnContainer: {
    width: '90%',
  },
  countryPickerButton: {
    ...styles.alignStart,
    ...styles.justifyCenter,
  },
});


/*************************************
email
fullName
nickname
phoneNo
gender
occupation



emailInputStyle
fullNameInputStyle
phoneNoInputStyle
nicknameInputStyle
occupationInputStyle
emailIcon
chevronDown


selectImage
callingCodeLib
countryCodeLib
visiblePiker

onFocusInput
onFocusIcon
onBlurInput
onBlurIcon



********************************** */
