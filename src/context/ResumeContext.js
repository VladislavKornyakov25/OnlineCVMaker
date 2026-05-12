import { createContext, useContext, useReducer } from 'react';
import { resumeReducer, initialState } from './resumeReducer';

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(resumeReducer, initialState);

    return (
        <ResumeContext.Provider value={{ state, dispatch }}>
            {children}
        </ResumeContext.Provider>
    );
};

// Кастомный хук для удобного доступа к данным в компонентах
export const useResume = () => {
    const context = useContext(ResumeContext);
    if (!context) throw new Error('useResume must be used within ResumeProvider');
    return context;
};