import http from './httpService';

const apiEndPoint = "/settings";

function settingUrl(id) {
    return `${apiEndPoint}/${id}`;
}

export function getSettings() {
    return http.get(apiEndPoint);
}

export function getSetting(settingId) {
    return http.get(settingUrl(settingId));
}

export function saveSetting(setting) {
    
    if (setting._id) {
    
        const body = { ...setting };
        delete body._id;
        return http.put(settingUrl(setting._id), body);
    }
  
    return http.post(apiEndPoint, setting);
}

export function deleteSetting(settingId) {
    return http.delete(settingUrl(settingId));
}