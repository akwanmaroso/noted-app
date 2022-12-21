use chrono::{DateTime, Utc};
use jfs::{Config, Store};
use serde::{Deserialize, Serialize};
use std::path::PathBuf;
use uuid::Uuid;

pub struct AppData {
    app_dir: Option<PathBuf>,
}

impl AppData {
    pub fn new(app_dir: Option<PathBuf>) -> Self {
        Self { app_dir }
    }

    fn get_store(&self) -> Store {
        let app_dir_path = self
            .app_dir
            .as_ref()
            .expect("failed determine app directory");

        if !app_dir_path.exists() {
            std::fs::create_dir(&app_dir_path).expect("failed to create app directory");
        }

        let data_path = &app_dir_path.join("notes");
        let path = data_path.to_str().expect("failed to build data file");

        let mut cfg = Config::default();
        cfg.single = true;
        if cfg!(debug_assertions) {
            cfg.pretty = true;
            cfg.indent = 4;
        }

        Store::new_with_cfg(&path, cfg).expect("failed to initialze store")
    }

    pub fn get_notes(&self) -> Vec<Note> {
        let mut notes = self
            .get_store()
            .all()
            .expect("failed to get all store")
            .values()
            .cloned()
            .collect::<Vec<Note>>();

        notes.sort_by(|a, b| a.created_at.cmp(&b.created_at));
        notes
    }

    pub fn create_note(&self, note: &Note) {
        self.get_store()
            .save_with_id(note, &note.id)
            .expect("failed to add note");
    }

    pub fn update_note(&self, note: &Note) {
        self.get_store()
            .save_with_id(note, &note.id)
            .expect("failed to update note");
    }

    pub fn delete_note(&self, id: String) {
        self.get_store().delete(&id).expect("failed to delete note");
    }
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Note {
    id: String,
    content: String,
    color: String,
    created_at: DateTime<Utc>,
}

impl Note {
    pub fn new(content: String, color: String) -> Self {
        let id = Uuid::new_v4().to_string();
        let created_at = Utc::now();

        Self {
            id,
            content,
            color,
            created_at,
        }
    }
}
