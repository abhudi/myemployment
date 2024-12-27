import CryptoJS from 'crypto-js';
const key = process.env.NEXT_PUBLIC_CRYPTO_KEY ?? "";

export function  encrypt(text : string) {
    const iv = CryptoJS.lib.WordArray.random(16); // Generate a random IV
    const encrypted = CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    // Prepend IV to the ciphertext, separated by a colon
    const ivBase64 = iv.toString(CryptoJS.enc.Base64);
    const encryptedBase64 = encrypted.toString();
    
    return ivBase64 + ':' + encryptedBase64; // Format: iv:encrypted
  };

  

