import { InvokeArgs } from "@tauri-apps/api/tauri";

export interface Note {
  id: string;
  content: string;
  color: string;
}
export const getNotes = async (): Promise<Note[]> => {
  const notes: string = await invoke("get_notes");
  return JSON.parse(notes);
};

export const addNote = async (
  content: string,
  color: string
): Promise<Note> => {
  const note: string = await invoke("add_note", { content, color });
  return JSON.parse(note);
};

export const updateNote = async (note: Note): Promise<Note> => {
  return await invoke("update_note", { note });
};

export const deleteNote = async (id: string): Promise<boolean> => {
  return await invoke("delete_note", { id });
};

async function invoke(cmd: string, args?: InvokeArgs): Promise<any> {
  const { invoke: tauri_invoke } = await import("@tauri-apps/api/tauri");
  return tauri_invoke(cmd, args);
}
