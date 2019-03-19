import http from './httpService';

const apiEndPoint = "/themes";

function themeUrl(id) {
    return `${apiEndPoint}/${id}`;
}

export function getThemes() {
    return http.get(apiEndPoint);
}

export function getTheme(themeId) {
    return http.get(themeUrl(themeId));
}

export function saveTheme(theme) {
    
    if (theme._id) {
    
        const body = { ...theme };
        delete body._id;
        return http.put(themeUrl(theme._id), body);
    }
  
    return http.post(apiEndPoint, theme);
}

export function deleteTheme(themeId) {
    return http.delete(themeUrl(themeId));
}