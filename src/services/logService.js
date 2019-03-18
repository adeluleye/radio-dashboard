// import Raven from 'raven-js';

function init() {
    // Raven.config('https://ab3d90a6c15b400c9ed97e74167c1a09@sentry.io/1404756', {
    //     release: '1-0-0',
    //     environment: 'development-test',
    // }).install();
}

function log(error) {
    console.log(error);
    //Raven.captureException(error);
}

export default {
    init,
    log
}