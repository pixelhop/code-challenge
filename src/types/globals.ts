declare module '*.css';

declare module '*.vue' {
    import Vue, { ComponentOptions } from 'vue';
    const vueTemplate: {
        <V extends Vue>(options: ComponentOptions<V>): ComponentOptions<V>;
        <V extends typeof Vue>(component: V): V;
    };
    export default vueTemplate;
}
