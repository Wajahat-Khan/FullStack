export default {
    port:8080,
    Host:'0.0.0.0',
    get serverUrl(){
        return `http://${this.Host}:${this.port}`
    }
}