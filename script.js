const LifecycleComponent = {
    data() {
        return {
            message: "Привет!"
        };
    },
    template: '<div @click="changeMessage">{{ message }}</div>',
    beforeMount() {
        this.$parent.addEvent("Компонент готовится к монтированию");
    },
    mounted() {
        this.$parent.addEvent("Компонент был смонтирован");
    },
    beforeUpdate() {
        this.$parent.addEvent("Компонент готовится к обновлению");
    },
    updated() {
        this.$parent.addEvent("Компонент обновлен");
    },
    beforeUnmount() {
        this.$parent.addEvent("Компонент готовится к удалению");
    },
    unmounted() {
        this.$parent.addEvent("Компонент удален");
    },
    methods: {
        changeMessage() {
            this.message = "Привет, Vue!";
        }
    }
};

const App = {
    components: {
        LifecycleComponent
    },
    data() {
        return {
            events: [],
            showComponent: false
        };
    },
    methods: {
        createComponent() {
            this.showComponent = true;
        },
        destroyComponent() {
            this.showComponent = false;
        },
        addEvent(message) {
            const now = new Date();
            this.events.push(`${message} в ${now.toLocaleTimeString()} и ${now.getMilliseconds()}мс`);
        }
    }
};

const app = Vue.createApp(App);
app.mount('#appVue');
