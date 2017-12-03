const mynotify = {
    notify: (message) => {
        alert(message);
    }
}




module.exports.install = (Vue) => {
    Vue.prototype.$mynotify = mynotify;
};