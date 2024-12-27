import CryptoJS from 'crypto-js';
const key = process.env.NEXT_PUBLIC_CRYPTO_KEY ?? "";

  export function decrypt(encryptedText: string) {
    // Split the encrypted text into IV and ciphertext
    const [ivBase64, encryptedBase64] = encryptedText.split(':');
    if (!ivBase64 || !encryptedBase64) {
        throw new Error("Invalid encrypted text format");
    }

    // Decode the IV and ciphertext
    const iv = CryptoJS.enc.Base64.parse(ivBase64);

    // Decrypt the ciphertext directly
    const decrypted = CryptoJS.AES.decrypt(
        encryptedBase64, // Pass the base64-encoded ciphertext directly
        CryptoJS.enc.Utf8.parse(key), // Use the same key as encryption
        {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }
    );

    return decrypted.toString(CryptoJS.enc.Utf8); // Convert to string
}

