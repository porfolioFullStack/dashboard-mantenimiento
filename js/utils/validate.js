export const isRequired = (value) => value.trim().length > 0;

export const hasMin = (value, min) => value.trim().length >= min;

export const hasMax = (value, max) => value.trim().length <= max;

export const isDateNotPast = (value) => {
  if (!value) return true;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const date = new Date(value);
  return date >= today;
};

export const validateField = (value, rules = []) =>
  rules.every((rule) => rule(value));
