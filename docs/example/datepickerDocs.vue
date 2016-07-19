<template>
    <div class="bs-docs-section" id="datepicker">
        <h1 class="page-header"><a href="#datepicker" class="anchor">Datepicker</a></h1>

        <tabset>
            <tab header="Example">
                <p>
                    <pre>Selected date is: {{new Date(value).toString().slice(0, -23)}}</pre>
                </p>

                <datepicker v-ref:dp :value.sync="value" :disabled-days-of-week="disabled" :format="format.toString()" :show-reset-button="reset" :show-picker-button="picker" @change="dateChanged"></datepicker>

                <h4>Disabled days of week</h4>

                <v-select multiple :value.sync="disabled">
                    <v-option value="0">0</v-option>
                    <v-option value="1">1</v-option>
                    <v-option value="2">2</v-option>
                    <v-option value="3">3</v-option>
                    <v-option value="4">4</v-option>
                    <v-option value="5">5</v-option>
                    <v-option value="6">6</v-option>
                </v-select>

                <h4>Format</h4>
                <v-select :value.sync="format">
                    <v-option value="yyyy,MM,dd">yyyy,MM,dd</v-option>
                    <v-option value="yyyy-MM-dd">yyyy-MM-dd</v-option>
                    <v-option value="yyyy.MM.dd">yyyy.MM.dd</v-option>
                    <v-option value="MMM/dd/yyyy">MMM/dd/yyyy</v-option>
                    <v-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</v-option>
                    <v-option value="dd/MM/yyyy">dd/MM/yyyy</v-option>
                    <v-option value="dd-MM-yyyy">dd-MM-yyyy</v-option>
                </v-select>

                <h4>Reset button</h4>
                <label>
                    <input type="checkbox" v-model="reset"> toggle reset button
                </label>

                <h4>Picker button</h4>
                <label>
                    <input type="checkbox" v-model="picker"> toggle picker button
                </label>
            </tab>

            <tab header="Markup">
                <pre><code class="language-markup"><script type="language-mark-up"><datepicker
  :value.sync="value"
  :disabled-days-of-week="disabled"
  :format="format"
  :show-reset-button="reset">
</datepicker>

<select multiple :value.sync="disabled" size=5>
  <v-option value="0">0</v-option>
  <v-option value="1">1</v-option>
  <v-option value="2">2</v-option>
  <v-option value="3">3</v-option>
  <v-option value="4">4</v-option>
  <v-option value="5">5</v-option>
  <v-option value="6">6</v-option>
</select>
<select  :value.sync="format">
  <v-option value="yyyy,MM,dd">yyyy,MM,dd</v-option>
  <v-option value="yyyy-MM-dd">yyyy-MM-dd</v-option>
  <v-option value="yyyy.MM.dd">yyyy.MM.dd</v-option>
  <v-option value="MMM/dd/yyyy">MMM/dd/yyyy</v-option>
  <v-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</v-option>
  <v-option value="dd/MM/yyyy">dd/MM/yyyy</v-option>
  <v-option value="dd-MM-yyyy">dd-MM-yyyy</v-option>
</select>
</script></code></pre>
            </tab>

            <tab header="Options">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>value</td>
                            <td><code>String</code></td>
                            <td></td>
                            <td>Value of the input DOM</td>
                        </tr>
                        <tr>
                            <td>format</td>
                            <td><code>String</code></td>
                            <td><code>dd/MM/yyyy</code></td>
                            <td>The date format, combination of d, dd, M, MM ,MMM , MMMM, yyyy.</td>
                        </tr>
                        <tr>
                            <td>disabledDaysOfWeek</td>
                            <td><code>Array</code></td>
                            <td></td>
                            <td>Days of the week that should be disabled. Values are 0 (Sunday) to 6 (Saturday). Multiple values should be comma-separated.</td>
                        </tr>
                        <tr>
                            <td>showResetButton</td>
                            <td><code>Boolean</code></td>
                            <td>false</td>
                            <td>If <strong>true</strong> shows an &times; shaped button to clear the selected date. Usefull in forms where date entry is optional.</td>
                        </tr>
                        <tr>
                            <td>showPickerButton</td>
                            <td><code>Boolean</code></td>
                            <td>false</td>
                            <td>If <strong>true</strong> shows a button to trigger the datepicker while clicking on the input does nothing.</td>
                        </tr>
                    </tbody>
                </table>
            </tab>
        </tabset>
    </div>
</template>

<script>
    import datepicker from 'src/Datepicker.vue';
    import select from 'src/Select.vue';
    import option from 'src/Option.vue';
    import tabset from 'src/Tabset.vue';
    import tab from 'src/Tab.vue';

    export default {
        components: {
                datepicker,
                tabset,
                tab,
                'v-select': select,
                'v-option': option
            },
            data() {
                return {
                    disabled: [],
                    value: '01/01/2016',
                    format: ['dd/MM/yyyy'],
                    reset: true,
                    picker: true
                }
            },
            methods: {
                dateChanged(value) {
                    console.log(value);
                },
            },
    }
</script>
