enum CacheType {
  local = "local",
  session = "session"
}

class MYCache {
  storage: Storage;

  constructor(type: CacheType) {
    this.storage = type === CacheType.local ? localStorage : sessionStorage;
  }

  setCache(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getCache(key: string) {
    const value = this.storage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  deleteCache(key: string) {
    this.storage.removeItem(key);
  }

  clearCache() {
    this.storage.clear();
  }
}

const localCache = new MYCache(CacheType.local);
const sessionCache = new MYCache(CacheType.session);

export { localCache, sessionCache };
