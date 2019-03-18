import http from './httpService';

const apiEndPoint = "/radios";

function radioUrl(id) {
    return `${apiEndPoint}/${id}`;
}

export function getRadios() {
    return http.get(apiEndPoint);
}

export function getRadio(radioId) {
    return http.get(radioUrl(radioId));
}

export function saveRadio(radio) {
    
    if (radio._id) {
    
        const body = { ...radio };
        delete body._id;
        return http.put(radioUrl(radio._id), body);
    }
  
    return http.post(apiEndPoint, radio);
}

export function deleteRadio(radioId) {
    return http.delete(radioUrl(radioId));
}