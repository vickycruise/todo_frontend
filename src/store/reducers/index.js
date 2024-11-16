// Example reducer
const initialState = {};

const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EXAMPLE_ACTION':
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

export default exampleReducer;
