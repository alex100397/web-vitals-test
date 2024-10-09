import {onCLS, onFCP, onLCP, onINP, onTTFB} from 'web-vitals';

const logWebVitals = () => {
  onCLS(console.log);
  onINP(console.log);
  onFCP(console.log);
  onLCP(console.log);
  onTTFB(console.log);
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics);
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
};

function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
    fetch('https://lens-m4m-scribe.hifx.in/vt', {body, method: 'POST', keepalive: true});
}

const handleRouteChange = () => {
  logWebVitals();
};

window.addEventListener('popstate', handleRouteChange);

const originalPushState = window.history.pushState;
const originalReplaceState = window.history.replaceState;

window.history.pushState = function(...args) {
  originalPushState.apply(window.history, args);
  handleRouteChange();
};

window.history.replaceState = function(...args) {
  originalReplaceState.apply(window.history, args);
  handleRouteChange();
};

console.log(window.history, 'history');

handleRouteChange();
