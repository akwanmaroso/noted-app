import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { getNotes, Note } from "../api/invoks";

type NoteContextType = {
  children?: ReactNode;

  notes?: Note[];
  currentNote?: Note;
  activeColor?: string;
  isLoading?: boolean;

  setNotes?: Dispatch<SetStateAction<Note[]>>;
  setCurrentNote?: Dispatch<SetStateAction<Note>>;
  setActiveColor?: Dispatch<SetStateAction<string>>;
  setIsLoading?: Dispatch<SetStateAction<boolean>>;

  fetchNote?: () => Promise<void>;
};

export const NoteContext = createContext({} as NoteContextType);

const NoteProvider: FC<NoteContextType> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>();
  const [currentNote, setCurrentNote] = useState<Note>();
  const [activeColor, setActiveColor] = useState<string>("green.300");
  const [isLoading, setIsLoading] = useState(false);

  const fetchNote = async () => {
    setIsLoading(true);
    getNotes()
      .then((res) => {
        setNotes(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  // useEffect(() => {
  //   setIsLoading(true);
  // }, []);

  const context: NoteContextType = {
    notes,
    activeColor,
    currentNote,

    setNotes,
    setActiveColor,
    setCurrentNote,
    setIsLoading,

    fetchNote,
  };

  return (
    <NoteContext.Provider value={context}>
      {isLoading ? "Loading " : children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
