const connect = (mapStateToData, mapDispatchToThis) => {
  const app = getApp();
  if (!mapStateToData || !mapDispatchToThis) {
    throw Error('`mapStateToData` 和 `mapDispatchToThis` 不能为空');
  }
  if (typeof mapStateToData !== 'function' || typeof mapDispatchToThis !== 'function') {
    throw Error('`mapStateToData` 和 `mapDispatchToThis` 必须为函数');
  }
  return (pageConfig) => {
    const { onLoad: _onLoad, onUnload: _onUnload, ...rest } = pageConfig;

    function handleSubscribe() {
      const mapData = mapStateToData(this.store.getState());
      this.setData({ ...mapData });
    };

    function onLoad(options) {
      this.store = app.store;
      handleSubscribe.call(this);
      this.unsubscribe = this.store.subscribe(handleSubscribe.bind(this));
      if (typeof _onLoad === 'function') {
        _onLoad.call(this, options);
      }
    }

    function onUnload() {
      if (typeof _onUnload === 'function') {
        _onUnload.call(this);
      }
      // 页面卸载后取消订阅
      if (typeof this.unsubscribe === 'function') {
        this.unsubscribe();
      }
    }

    return Object.assign({}, rest, mapDispatchToThis(app.store.dispatch), { onLoad, onUnload });
  };
};

export default connect;
