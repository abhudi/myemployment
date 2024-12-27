import { StorageKeys } from "@/enums/StorageKeys";
import { decrypt } from "./decrypt";
import { encrypt } from "./encrypt";

// Utility functions for sessionStorage
export class sessionStorageUtil {
    // Set an item in sessionStorage
    static setItem<T>(key: StorageKeys, value: T): void {
        sessionStorage.setItem(key, encrypt(JSON.stringify(value)));
    }

    // Get an item from sessionStorage
    static getItem<T>(key: StorageKeys) {
        const item = sessionStorage.getItem(key);
        if(item){
            const decryptedValue = decrypt(item as string);
            return JSON.parse(decryptedValue) as T;
        }
      return (null) as T;
    }

    // Remove an item from sessionStorage
    static removeItem(key: StorageKeys): void {
        sessionStorage.removeItem(key);
    }

    // Clear all items in sessionStorage
    static clear(): void {
        sessionStorage.clear();
    }

    // Get an item from sessionStorage
    static getOrganizationId<int>() {
        const item = sessionStorage.getItem(StorageKeys.typeAheadOrganizationKeyValue);
        if(item){
            const decryptedValue = decrypt(item as string);
            if(decryptedValue != null && decryptedValue != "" && decryptedValue != undefined && JSON.parse(decryptedValue) != null){
                const typeAheadValues = JSON.parse(decryptedValue).split("_");
                return typeAheadValues[0] as int;
            }
        }
        return 0;
    }

    static getOrganizationTypeId<int>() {
        const item = sessionStorage.getItem(StorageKeys.typeAheadOrganizationKeyValue);
        if(item){
            const decryptedValue = decrypt(item as string);
            if(decryptedValue != null && decryptedValue != "" && decryptedValue != undefined && JSON.parse(decryptedValue) != null){
                const typeAheadValues = JSON.parse(decryptedValue).split("_");
                return typeAheadValues[1] as int;
            }
        }
       
        return 0;
    }
}