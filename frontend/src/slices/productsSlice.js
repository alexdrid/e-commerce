import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProducts = createAsyncThunk('users/getUsers', async () => {
    const response = await axios.get('/api/products')
    return response.data
  })

export const productListSlice = createSlice({
    name: 'productList',
    initialState: {
      products: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getProducts.pending, (state, action) => {
        if (state.loading === false) {
          state.loading = true
        }
      })
      builder.addCase(getProducts.fulfilled, (state, action) => {
        if (state.loading === true) {
          state.products = action.payload
          state.loading = false
        }
      })
      builder.addCase(getProducts.rejected, (state, action) => {
        if (state.loading === true) {
          state.loading = false
          state.error = 'Error occurred'
        }
      })
    },
  })

  export default productListSlice.reducer
