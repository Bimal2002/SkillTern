import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccessStatus, CourseLevel, ICourse } from '../../../types/course.type';

interface CourseState {
  courseId: string;
  isOpenCreateCourse: boolean;
  formData: ICourse;
  sectionId: string;
  isOpenAddSectionModal: boolean;
  couponDiscount: number; // Add this line
}

const initialState: CourseState = {
  courseId: '',
  isOpenCreateCourse: false,
  formData: {
    _id: '',
    name: '',
    description: '',
    price: 0,
    finalPrice: 0,
    access: AccessStatus.FREE,
    level: CourseLevel.BEGINNER,
    thumbnail: '',
    courseSlug: '',
    categoryId: {
      _id: '',
      name: ''
    },
    userId: {
      _id: '6468a145401d3810494f4797',
      name: 'Nguyen Van A',
      avatar: ''
    },
    willLearns: [],
    requirements: [],
    tags: [],
    subTitle: '',
    couponDiscountPercentage: 0, // Add this line
    couponCode: '', // Add this line
  },
  sectionId: '',
  isOpenAddSectionModal: false,
  couponDiscount: 0 // Add this line
};


const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    openCreateCourse: (state, action: PayloadAction<boolean>) => {
      state.isOpenCreateCourse = action.payload;
    },
    startEditCourse: (state, action: PayloadAction<string>) => {
      state.courseId = action.payload;
    },
    startAddSection: (state, action: PayloadAction<string>) => {
      state.sectionId = action.payload;
    },
    cancelEditCourse: (state) => {
      state.courseId = '';
    },
    handleFormData: (state, action: PayloadAction<Partial<ICourse>>) => {
      const updatedFormData: Partial<ICourse> = action.payload;
      
      // Only update properties that are defined in the payload
      if (updatedFormData._id !== undefined) {
        state.formData._id = updatedFormData._id;
      }
      if (updatedFormData.name !== undefined) {
        state.formData.name = updatedFormData.name;
      }
      if (updatedFormData.description !== undefined) {
        state.formData.description = updatedFormData.description;
      }
      if (updatedFormData.price !== undefined) {
        state.formData.price = updatedFormData.price;
      }
      if (updatedFormData.finalPrice !== undefined) {
        state.formData.finalPrice = updatedFormData.finalPrice;
      }
      if (updatedFormData.access !== undefined) {
        state.formData.access = updatedFormData.access;
      }
      if (updatedFormData.level !== undefined) {
        state.formData.level = updatedFormData.level;
      }
      if (updatedFormData.thumbnail !== undefined) {
        state.formData.thumbnail = updatedFormData.thumbnail;
      }
      if (updatedFormData.courseSlug !== undefined) {
        state.formData.courseSlug = updatedFormData.courseSlug;
      }
      if (updatedFormData.categoryId !== undefined) {
        state.formData.categoryId = updatedFormData.categoryId;
      }
      if (updatedFormData.userId !== undefined) {
        state.formData.userId = updatedFormData.userId;
      }
      if (updatedFormData.willLearns !== undefined) {
        state.formData.willLearns = updatedFormData.willLearns;
      }
      if (updatedFormData.requirements !== undefined) {
        state.formData.requirements = updatedFormData.requirements;
      }
      if (updatedFormData.tags !== undefined) {
        state.formData.tags = updatedFormData.tags;
      }
      if (updatedFormData.subTitle !== undefined) {
        state.formData.subTitle = updatedFormData.subTitle;
      }
      if (updatedFormData.couponCode !== undefined) {
        state.formData.couponCode = updatedFormData.couponCode;
      }
      if (updatedFormData.couponDiscountPercentage !== undefined) {
        state.formData.couponDiscountPercentage = updatedFormData.couponDiscountPercentage;
      }
    },
    openAddSectionModal: (state) => {
      state.isOpenAddSectionModal = true;
    },
    closeAddSectionModal: (state) => {
      state.isOpenAddSectionModal = false;
    }
  }
});

const courseReducer = courseSlice.reducer;
export const {
  cancelEditCourse,
  startEditCourse,
  openCreateCourse,
  handleFormData,
  startAddSection,
  openAddSectionModal,
  closeAddSectionModal
} = courseSlice.actions;
export default courseReducer;
