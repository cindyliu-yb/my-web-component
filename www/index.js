Vue.config.ignoredElements = [
    'form-input-base'
]

Vue.component('sample-form-input', {
    props: ['field', 'value'],
    template: '<label>{{ field.label }}:<form-input-base :value="value" @valueChange="onValueChange"></form-input-base></label>',
    methods: {
        onValueChange: function(ev) {
            this.$emit('input', ev.target.value)
        }
    }
})
var app7 = new Vue({
    el: '#app-1',
    data: {
        fields: [
            {label: 'Name', type: 'text', controlName: 'name', value: 'Cindy'},
            {label: 'Street', type: 'text', controlName: 'street', value: '8 Scrubs Lane'},
            {label: 'City', type: 'text', controlName: 'city', value: 'London'},
            {label: 'State', type: 'select', controlName: 'state', value: 'UK'},
            {label: 'Zip', type: 'number', controlName: 'zip', value: 'NW6 5RB'}
        ]
    },
    computed: {
        formValue: function() {
            return this.fields.reduce((accu, f) => {
                accu[f.label] = f.value
                return accu
            }, {})
        }
    }
})