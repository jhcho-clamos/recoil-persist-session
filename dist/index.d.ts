import { AtomEffect } from 'recoil';
export interface PersistStorageSession {
    setItem(key: string, value: string): void | Promise<void>;
    mergeItem?(key: string, value: string): Promise<void>;
    getItem(key: string): null | string | Promise<string>;
}
export interface PersistConfigurationSession {
    key?: string;
    storage?: PersistStorage;
}
/**
 * Recoil module to persist state to storage
 *
 * @param config Optional configuration object
 * @param config.key Used as key in local storage, defaults to `recoil-persist`
 * @param config.storage Local storage to use, defaults to `localStorage`
 */
export declare const recoilPersistSession: (config?: PersistConfigurationSession) => {
    persistAtom: AtomEffect<any>;
};
