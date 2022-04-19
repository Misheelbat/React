import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	mainCat: 'Muscle',
	subCat: '',
};

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		selectMainCategory(state, action) {
			state.mainCat = action.payload;
			state.subCat = '';
		},
		selectSubCategory(state, action) {
			state.subCat = action.payload;
		},
	},
});

export const { selectMainCategory, selectSubCategory } = categorySlice.actions;
export default categorySlice.reducer;
