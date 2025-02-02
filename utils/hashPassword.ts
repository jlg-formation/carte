interface Credential {
  email: string;
  password: string;
}

export const hashPassword = async ({ email, password }: Credential) => {
  const salt = "somesalt";
  const buffer = await window.crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(salt + email + salt + password + salt),
  );
  const digest = Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  return digest;
};
