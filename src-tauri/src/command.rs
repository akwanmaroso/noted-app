use tauri::{command, AppHandle};

use crate::models::{AppData, Note};

#[command]
pub fn get_notes(app: AppHandle) -> Result<String, String> {
    let notes = AppData::new(app.path_resolver().app_dir()).get_notes();

    let serialized = serde_json::to_string(&notes).expect("failed to serialize todo");
    Ok(serialized)
}

#[command]
pub fn add_note(app: AppHandle, content: String, color: String) -> Result<String, String> {
    let note = Note::new(content, color);
    AppData::new(app.path_resolver().app_dir()).create_note(&note);

    let serialized = serde_json::to_string(&note).expect("failed to serialize todo");
    Ok(serialized)
}

#[command]
pub fn update_note(app: AppHandle, note: Note) -> Result<(), String> {
    AppData::new(app.path_resolver().app_dir()).update_note(&note);

    Ok(())
}

#[command]
pub fn delete_note(app: AppHandle, id: String) -> Result<(), String> {
    AppData::new(app.path_resolver().app_dir()).delete_note(id);

    Ok(())
}
