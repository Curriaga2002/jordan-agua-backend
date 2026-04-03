export const ValidationUtils = {
  isEmail: (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  isPhone: (phone: string): boolean => {
    const regex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{4}[-.\s]?\d{4}$/;
    return regex.test(phone);
  },

  isDecimal: (value: string): boolean => {
    const regex = /^(\d+)(\.\d+)?$/;
    return regex.test(value);
  },

  isNIT: (nit: string): boolean => {
    const regex = /^[0-9]{3}-[0-9]{6}-[0-9]{1}$/;
    return regex.test(nit);
  },

  isCedula: (cedula: string): boolean => {
    const regex = /^[0-9]{10}$/;
    return regex.test(cedula);
  },

  isNumeric: (value: string): boolean => {
    const regex = /^\d+$/;
    return regex.test(value);
  }
};