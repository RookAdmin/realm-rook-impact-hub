/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_SANITY_PROJECT_ID_1: string;
    readonly VITE_SANITY_PROJECT_ID_2: string;
    readonly VITE_SANITY_PROJECT_ID_3: string;
    readonly VITE_SANITY_DATASET_1: string;
    readonly VITE_SANITY_DATASET_2: string;
    readonly VITE_SANITY_DATASET_3: string;
    // add other environment variables here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  