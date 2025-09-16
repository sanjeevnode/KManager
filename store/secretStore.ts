
import { TSceret } from "@/types";
import { create } from "zustand";

type SecretState = {
    secrets: Array<TSceret>;
    setSecrets: (secrets: Array<TSceret>) => void;
    secretToDelete: TSceret | null;
    setSecretToDelete: (secret: TSceret | null) => void;
    secretToEdit: TSceret | null;
    setSecretToEdit: (secret: TSceret | null) => void; 
    demoSecrets?: Array<TSceret>;
};

const secretStore = create<SecretState>((set) => ({
  secrets: [],
  setSecrets: (secrets) => set({ secrets }),
  secretToDelete: null,
  setSecretToDelete: (secret) => set({ secretToDelete: secret }),
  secretToEdit: null,
  setSecretToEdit: (secret) => set({ secretToEdit: secret }),
  demoSecrets: [
    {
      id: "1",
      title: "Demo Secret 1",
      content: "This is the content of demo secret 1.",
      iv: "demoIv1",
      salt: "demoSalt1",
      tag: "demoTag1",
      lastUpdated: new Date(),
    },
    {
      id: "2",
      title: "Demo Secret 2",
      content: "This is the content of demo secret 2.",
      iv: "demoIv2",
      salt: "demoSalt2",
      tag: "demoTag2",
      lastUpdated: new Date(),
    },
    {
      id: "3",
      title: "Demo Secret 3",
      content: "This is the content of demo secret 3.",
      iv: "demoIv3",
      salt: "demoSalt3",
      tag: "demoTag3",
      lastUpdated: new Date(),
    },
  ],
}));

export { secretStore };
