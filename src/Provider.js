// 检查 store 是否合法
const checkStore = (store) => {
  if (!store) {
    return false;
  }
  const props = ['subscribe', 'dispatch', 'getState'];
  const filtered = props.filter(prop =>
    store.hasOwnProperty(prop)
    && typeof store[prop] === 'function'
  );
  return props.length === filtered.length;
};

/** Provider */
const Provider = (store) => (appConfig) => {
  if (appConfig.store) {
    throw Error('App() 内不要添加 `store` 变量');
  }
  if (!checkStore(store)) {
    throw Error('`store` 不合法');
  }
  return { ...appConfig, store };
};

export default Provider;
