import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCourses } from '@services/apis/Apis';

interface CourseState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

interface Course {
  id: number;
  course_name: string;
  course_description: string;
  course_credit: number;
  course_status: boolean;
  course_application_link: string;
  course_image: string;
  created_at: string;
}

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    try {
      const response = await getCourses();
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch courses');
    }
  },
);

const initialState: CourseState = {
  courses: [],
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch courses';
      });
  },
});

export default courseSlice.reducer;