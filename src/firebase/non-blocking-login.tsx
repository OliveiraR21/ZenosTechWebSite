'use client';
import {
  Auth, // Import Auth type for type hinting
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

/** Initiate anonymous sign-in (non-blocking). */
export function initiateAnonymousSignIn(authInstance: Auth): void {
  // CRITICAL: Call signInAnonymously directly. Do NOT use 'await signInAnonymously(...)'.
  // We attach a .catch() to handle errors and prevent app crashes from unhandled promise rejections,
  // especially if the Anonymous sign-in provider is disabled in the Firebase console.
  signInAnonymously(authInstance).catch(error => {
    if (error.code === 'auth/admin-restricted-operation') {
      console.warn(
        'NIKO Chat Warning: Anonymous sign-in failed. Please enable the "Anonymous" sign-in provider in your Firebase console for chat history to persist across sessions.'
      );
    } else {
      console.error('Firebase Anonymous sign-in error:', error);
    }
  });
  // Code continues immediately. Auth state change is handled by onAuthStateChanged listener.
}

/** Initiate email/password sign-up (non-blocking). */
export function initiateEmailSignUp(authInstance: Auth, email: string, password: string): void {
  // CRITICAL: Call createUserWithEmailAndPassword directly. Do NOT use 'await createUserWithEmailAndPassword(...)'.
  createUserWithEmailAndPassword(authInstance, email, password).catch(error => {
    console.error('Firebase Email sign-up error:', error);
  });
  // Code continues immediately. Auth state change is handled by onAuthStateChanged listener.
}

/** Initiate email/password sign-in (non-blocking). */
export function initiateEmailSignIn(authInstance: Auth, email: string, password: string): void {
  // CRITICAL: Call signInWithEmailAndPassword directly. Do NOT use 'await signInWithEmailAndPassword(...)'.
  signInWithEmailAndPassword(authInstance, email, password).catch(error => {
    // Errors from this are typically handled on the page calling it, but this prevents any unhandled rejections.
    console.warn('Firebase Email sign-in error:', error);
  });
  // Code continues immediately. Auth state change is handled by onAuthStateChanged listener.
}
