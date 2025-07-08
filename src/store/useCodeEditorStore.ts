import { CodeEditorState } from "@/types/index";
import { LANGUAGE_CONFIG } from "@/app/(root)/_constants";
import { create } from "zustand";
import { editor } from "monaco-editor";

const getInitialState = () => {
    // if we're on the server, return default values
    if (typeof window === "undefined") {
        return {
            language: "python",
            fontSize: 14,
            theme: "vs-dark"
        }
    }

    // if we're on the client, return values from local storage because localStorage is a browser API
    const savedLanguage = localStorage.getItem("editor-language") || "python";
    const savedTheme = localStorage.getItem("editor-theme") || "vs-dark";
    const savedFontSize = localStorage.getItem("editor-font-size") || "14";

    return {
        language: savedLanguage,
        theme: savedTheme,
        fontSize: Number(savedFontSize),
    }
};

export const useCodeEditorStore = create<CodeEditorState>((set, get) => {

    const initialState = getInitialState()

    return {
        ...initialState,
        output: "",
        isRunning: false,
        error: null,    
        editor: null,
        executionResult: null,  

        getCode: () => get().editor?.getValue() || "",
        
        setEditor: (editorInstance: editor.IStandaloneCodeEditor) => {
            const savedCode = localStorage.getItem(`editor-code-${get().language}`);
            if (savedCode) editorInstance.setValue(savedCode);
            set({ editor: editorInstance });
        },

        setTheme: (theme: string) => {
            localStorage.setItem("editor-theme", theme);
            set({ theme });
        },
        
        setFontSize: (fontSize: number) => {
            localStorage.setItem("editor-font-size", fontSize.toString());
            set({ fontSize });
        },

        setLanguage: (language: string) => {
            // Save current language code before switching
            const currentCode = get().editor?.getValue();
            if (currentCode) {
                localStorage.setItem(`editor-code-${get().language}`, currentCode);
            }

            localStorage.setItem("editor-language", language);

            set({
                language,
                output: "",
                error: null,
            });
        },


        runCode: async () => {//  *TODO - will be implemented later 
        }


    }
})