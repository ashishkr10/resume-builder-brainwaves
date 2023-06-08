const INITIAL_STATE = {
  personalInfo: null,
  education: [],
  experience: [],
  skills: [],
  img: null,
};

export const FormActionTypes = {
  SET_PERSONAL_INFO: "SET_PERSONAL_INFO",
  SET_EDUCATION: "SET_EDUCATION",
  SET_EXPERIENCE: "SET_EXPERIENCE",
  SET_SKILLS: "SET_SKILLS",
  SET_IMG: "SET_IMG",
};

export const personalInfoState = (value) => ({
  type: FormActionTypes.SET_PERSONAL_INFO,
  payload: { value },
});
export const educationState = (value) => ({
  type: FormActionTypes.SET_EDUCATION,
  payload: { value },
});
export const experienceState = (value) => ({
  type: FormActionTypes.SET_EXPERIENCE,
  payload: { value },
});
export const skillsState = (value) => ({
  type: FormActionTypes.SET_SKILLS,
  payload: { value },
});
export const imgState = (value) => ({
  type: FormActionTypes.SET_IMG,
  payload: { value },
});

export const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FormActionTypes.SET_PERSONAL_INFO:
      return { ...state, personalInfo: action.payload.value };
    case FormActionTypes.SET_EDUCATION:
      return { ...state, education: action.payload.value };
    case FormActionTypes.SET_EXPERIENCE:
      return { ...state, experience: action.payload.value };
    case FormActionTypes.SET_SKILLS:
      return { ...state, skills: action.payload.value };
    case FormActionTypes.SET_IMG:
      return { ...state, img: action.payload.value };

    default:
      return state;
  }
};

export const setPersonalInfoSelector = (state) => state.personalInfo;
export const setEducationSelector = (state) => state.education;
export const setExperienceSelector = (state) => state.experience;
export const setSkillsSelector = (state) => state.skills;
export const setImgSelector = (state) => state.img;
