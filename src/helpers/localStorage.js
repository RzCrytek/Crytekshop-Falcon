const LsSaveData = (key, data) => {
  const parsed = JSON.stringify(data);
  localStorage.setItem(key, parsed);
};

const LsRemoveData = (key) => {
  localStorage.removeItem(key);
};

const LsGetData = (key) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error('error:', error);
    LsRemoveData(key);
  }
};

export { LsSaveData, LsRemoveData, LsGetData };
