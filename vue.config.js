module.exports = {
    css: {
        loaderOptions: {

            scss: {
                prependData: '@import "@/assets/sass/variables.scss";',
            },
        }
    }
};