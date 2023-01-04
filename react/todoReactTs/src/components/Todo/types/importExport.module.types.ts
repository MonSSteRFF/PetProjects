import { I_TodoState } from "../index";

type T_importFile = (TodoState: I_TodoState, file?: File) => void;

type T_exportFile = (TodoState: I_TodoState) => void;

export type { T_importFile, T_exportFile };
