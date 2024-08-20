import { createAsyncThunk } from "@reduxjs/toolkit";

const togglePlay = createAsyncThunk(
  "song/togglePlay",

  (value) => {
    return value;
  }
);

export { togglePlay };
