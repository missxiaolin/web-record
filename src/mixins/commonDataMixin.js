export default {
    computed: {
        reportData() {
            return this.getWordCloud()
        }
    },
    inject: ['getWordCloud']
}