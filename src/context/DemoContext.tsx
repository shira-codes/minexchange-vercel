import { create } from 'zustand';

// Types
export type UserRole = 'individual' | 'agent' | 'broker' | 'service_provider' | 'admin';

interface AppState {
  // Auth & User
  isAuthenticated: boolean;
  userRole: UserRole;
  userName: string;
  
  // Gating
  ndaSigned: boolean;
  hasInsightsSubscription: boolean;
  
  // Demo Controls
  toggleAuth: () => void;
  setRole: (role: UserRole) => void;
  toggleNDA: () => void;
  toggleSubscription: () => void;
  resetDemo: () => void;
}

// Simple mock store implementation (replacing zustand with a custom hook/context later if needed, 
// but for now I'll use a simple singleton pattern or Context since I can't install zustand right now without another tool call 
// and I want to proceed. Actually, I'll stick to React Context for simplicity in this environment 
// or just a global object if I want to be quick, but Context is better).
// Wait, I can install zustand. It's standard. I'll add it to the next install list if needed.
// For now, let's use a React Context for global state to avoid extra deps if possible, 
// BUT zustand is much cleaner. I'll use a React Context in a separate file.

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DemoContextType {
  isAuthenticated: boolean;
  userRole: UserRole;
  ndaSigned: boolean;
  hasInsightsSubscription: boolean;
  login: () => void;
  logout: () => void;
  setUserRole: (role: UserRole) => void;
  setNdaSigned: (signed: boolean) => void;
  setHasInsightsSubscription: (has: boolean) => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem('demo_isAuthenticated') === 'true');
  const [userRole, setUserRole] = useState<UserRole>(() => (localStorage.getItem('demo_userRole') as UserRole) || 'individual');
  const [ndaSigned, setNdaSigned] = useState(() => localStorage.getItem('demo_ndaSigned') === 'true');
  const [hasInsightsSubscription, setHasInsightsSubscription] = useState(() => localStorage.getItem('demo_hasInsightsSubscription') === 'true');

  React.useEffect(() => {
    localStorage.setItem('demo_isAuthenticated', String(isAuthenticated));
  }, [isAuthenticated]);

  React.useEffect(() => {
    localStorage.setItem('demo_userRole', userRole);
  }, [userRole]);

  React.useEffect(() => {
    localStorage.setItem('demo_ndaSigned', String(ndaSigned));
  }, [ndaSigned]);

  React.useEffect(() => {
    localStorage.setItem('demo_hasInsightsSubscription', String(hasInsightsSubscription));
  }, [hasInsightsSubscription]);

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    setNdaSigned(false);
    setUserRole('individual');
    localStorage.removeItem('demo_isAuthenticated');
    localStorage.removeItem('demo_userRole');
    localStorage.removeItem('demo_ndaSigned');
    localStorage.removeItem('demo_hasInsightsSubscription');
  };

  return (
    <DemoContext.Provider value={{
      isAuthenticated,
      userRole,
      ndaSigned,
      hasInsightsSubscription,
      login,
      logout,
      setUserRole,
      setNdaSigned,
      setHasInsightsSubscription
    }}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (context === undefined) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
}
