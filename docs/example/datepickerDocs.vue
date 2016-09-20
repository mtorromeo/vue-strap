<template>
    <div class="bs-docs-section" id="datepicker">
        <h1 class="page-header"><a href="#datepicker" class="anchor">Datepicker</a></h1>

        <tabs>
            <tab header="Example">
                <p>
                    <pre>Selected date is: {{dateValue}}</pre>
                </p>

                <datepicker ref="dp" v-model="value" :disabled-days-of-week="disabled" :format="format.toString()" :show-reset-button="reset" :show-picker-button="picker" @change="dateChanged"></datepicker>

                <h4>Disabled days of week</h4>

                <bs-select multiple v-model="disabled">
                    <bs-option value="0">0</bs-option>
                    <bs-option value="1">1</bs-option>
                    <bs-option value="2">2</bs-option>
                    <bs-option value="3">3</bs-option>
                    <bs-option value="4">4</bs-option>
                    <bs-option value="5">5</bs-option>
                    <bs-option value="6">6</bs-option>
                </bs-select>

                <h4>Format</h4>
                <bs-select v-model="format">
                    <bs-option value="yyyy,MM,dd">yyyy,MM,dd</bs-option>
                    <bs-option value="yyyy-MM-dd">yyyy-MM-dd</bs-option>
                    <bs-option value="yyyy.MM.dd">yyyy.MM.dd</bs-option>
                    <bs-option value="MMM/dd/yyyy">MMM/dd/yyyy</bs-option>
                    <bs-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</bs-option>
                    <bs-option value="dd/MM/yyyy">dd/MM/yyyy</bs-option>
                    <bs-option value="dd-MM-yyyy">dd-MM-yyyy</bs-option>
                </bs-select>

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
  v-model="value"
  :disabled-days-of-week="disabled"
  :format="format"
  :show-reset-button="reset">
</datepicker>

<bs-select multiple v-model="disabled" size=5>
  <bs-option value="0">0</bs-option>
  <bs-option value="1">1</bs-option>
  <bs-option value="2">2</bs-option>
  <bs-option value="3">3</bs-option>
  <bs-option value="4">4</bs-option>
  <bs-option value="5">5</bs-option>
  <bs-option value="6">6</bs-option>
</bs-select>
<bs-select v-model="format">
  <bs-option value="yyyy,MM,dd">yyyy,MM,dd</bs-option>
  <bs-option value="yyyy-MM-dd">yyyy-MM-dd</bs-option>
  <bs-option value="yyyy.MM.dd">yyyy.MM.dd</bs-option>
  <bs-option value="MMM/dd/yyyy">MMM/dd/yyyy</bs-option>
  <bs-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</bs-option>
  <bs-option value="dd/MM/yyyy">dd/MM/yyyy</bs-option>
  <bs-option value="dd-MM-yyyy">dd-MM-yyyy</bs-option>
</bs-select>
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
                            <td>Input's value</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td><code>String</code></td>
                            <td>text</td>
                            <td>Input's type. Type <code>hidden</code> can be used to only show a picker button.</td>
                        </tr>
                        <tr>
                            <td>tabindex</td>
                            <td><code>String</code></td>
                            <td></td>
                            <td>Input's tabindex</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td><code>String</code></td>
                            <td></td>
                            <td>Input's placeholder</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td><code>String</code></td>
                            <td></td>
                            <td>Input's disabled</td>
                        </tr>
                        <tr>
                            <td>format</td>
                            <td><code>String</code></td>
                            <td><code>dd/MM/yyyy</code></td>
                            <td>The date format, combination of d, dd, M, MM , MMM, MMMM, yyyy.</td>
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

            <tab header="Events">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Parameters</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>change</td>
                        <td>value</td>
                        <td>Triggered on value change</td>
                    </tbody>
                </table>
            </tab>
        </tabs>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                disabled: [],
                value: '01/01/2016',
                dateValue: '',
                format: ['dd/MM/yyyy'],
                reset: true,
                picker: true,
            };
        },
        methods: {
            dateChanged(value) {
                console.log(value);
                console.log(this.$refs);
            },
        },
    };
</script>
