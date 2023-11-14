/// <reference types="vite/client" />
type Status = 'initialized' | 'progress' | 'done';

type Todo = {
  id: string;
  text: string;
  status: Status;
};
