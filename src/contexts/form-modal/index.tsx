import React, { createContext, useReducer } from "react";

const initialValues: FormState = {
  isVisible: false,
  data: null,
};

interface FormState {
  isVisible: boolean;
  data: any;
}

type Action = { type: "open"; data: any } | { type: "close" };

export const FormModalContext = createContext<any>([]);

export const FormModalProvider: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(FormModalReducer, initialValues);

  return (
    <FormModalContext.Provider value={[state, dispatch]}>
      {children}
    </FormModalContext.Provider>
  );
};

const FormModalReducer = (state: FormState, action: Action) => {
  switch (action.type) {
    case "open":
      return {
        isVisible: true,
        data: action.data,
      };
    case "close":
      return initialValues;
    default:
      return initialValues;
  }
};
