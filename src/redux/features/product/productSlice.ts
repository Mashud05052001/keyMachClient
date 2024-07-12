import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 10 };

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // dispatchFunction(state, action: PayloadAction<type_declare>){
    // here you can update the state any value. But not return type acceptable. for update state.value= ...operation...
    // state.value += action.payload.value};
    // },
  },
});

// export const {  } = productSlice.actions;

export default productSlice.reducer;
