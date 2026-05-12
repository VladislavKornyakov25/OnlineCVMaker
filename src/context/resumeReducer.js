export const initialState = {
    basics: { firstName: '', lastName: '', jobTitle: '', summary: '' },
    contacts: { email: '', phone: '', location: '', links: [] },
    experience: [],
    education: [],
    skills: []
};

export const resumeReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_BASICS':
            return {
                ...state,
                basics: { ...state.basics, [action.payload.field]: action.payload.value }
            };
        // Сюда будем добавлять обработку массивов (опыт, навыки) на следующих шагах
        default:
            return state;
    }
};