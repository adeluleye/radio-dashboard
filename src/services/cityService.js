import http from './httpService';

const apiEndPoint = "/cities";

function cityUrl(id) {
    return `${apiEndPoint}/${id}`;
}

export function getCities() {
    return http.get(apiEndPoint);
}

export function getCity(cityId) {
    return http.get(cityUrl(cityId));
}

export function saveCity(city) {
    
    if (city._id) {
    
        const body = { ...city };
        delete body._id;
        return http.put(cityUrl(city._id), body);
    }
  
    return http.post(apiEndPoint, city);
}

export function deleteCity(cityId) {
    return http.delete(cityUrl(cityId));
}