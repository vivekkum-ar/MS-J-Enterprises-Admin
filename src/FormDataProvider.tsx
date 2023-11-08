import React, { createContext, useState, useContext, ReactNode } from 'react';

const FormDataContext = createContext<{
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
} | undefined>(undefined);

export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState({
    billNumber: 0,
    billMonth: '',
    billDate: '',
    baseRent: 24150,
    kmUsed: 0,
    dieselRate: 92.67,
    parking: 0,
    tollTax: 0,
    overtime: 0,
    extraKms: 0,
    checkparking: false,
    checktollTax: false,
    checkovertime: false,
    checkextraKms: false
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};