export const generateId = (): string => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 8);
    return `${timestamp}-${randomStr}`;
};

// Alias for backward compatibility
export const generateUniqueId = generateId; 