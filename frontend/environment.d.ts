declare global {
    namespace NodeJS {
      type ProcessEnv = {
        GITHUB_AUTH_TOKEN: string;
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
        NEXT_PUBLIC_PROJECT_ID: string;
      }
    }
  }