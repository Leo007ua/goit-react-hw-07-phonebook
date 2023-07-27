const { createSlice, nanoid } = require('@reduxjs/toolkit');

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.contacts.push(payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            name: contact.name,
            number: contact.number,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, filterContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// export const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'form/setNameContact':
//       return {
//         ...state,
//         nameContact: action.payload,
//       };
//     case 'form/setNumber':
//       return {
//         ...state,
//         number: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const setNameContact = payload => {
//   return {
//     type: 'form/setNameContact',
//     payload,
//   };
// };

// export const setNumber = payload => {
//   return {
//     type: 'form/setNumber',
//     payload,
//   };
// };
