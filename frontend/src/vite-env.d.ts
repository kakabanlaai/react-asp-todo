/// <reference types="vite/client" />
type Status = 'initialized' | 'progress' | 'done';

type Todo = {
  id: number;
  name: string;
  isComplete: boolean;
};
