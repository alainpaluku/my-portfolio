// Types pour View Transitions API
interface ViewTransition {
    ready: Promise<void>;
    finished: Promise<void>;
    updateCallbackDone: Promise<void>;
    skipTransition(): void;
}

interface Document {
    startViewTransition(callback?: () => void | Promise<void>): ViewTransition;
}

// Déclarations globales pour CSS View Transitions
declare global {
    interface CSSStyleDeclaration {
        viewTransitionName?: string;
    }
}

export { };