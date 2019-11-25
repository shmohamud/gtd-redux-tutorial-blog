export const ADD_BRAINDUMP_ITEM = "ADD_BRAINDUMP_ITEM";

let nextBraindumpId = 0;

export const addBraindumpItem = text => {
  return {
    type: ADD_BRAINDUMP_ITEM,
    id: nextBraindumpId++,
    text: text,
    processed: false
  };
};
