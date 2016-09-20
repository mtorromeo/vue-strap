<template>
  <div class="bs-docs-section" id="buttons">
    <h1 class="page-header"><a href="#buttons" class="anchor">Buttons</a></h1>
    <div class="bs-example">
      <h4>Checkbox</h4>
      <checkbox-group v-model="checkboxValue">
        <checkbox value="left">Left</checkbox>
        <checkbox value="middle" checked>Middle</checkbox>
        <checkbox value="right">Right</checkbox>
      </checkbox-group>
      <p>
        <pre>
Checkbox value: {{checkboxValue}}
        </pre>
      </p>
      <hr>
      <h4>Radio</h4>
      <radio-group v-model="radioValue" type="primary">
        <radio value="left">Left</radio>
        <radio value="middle" checked>Middle</radio>
        <radio value="right">Right</radio>
      </radio-group>

      <radio-group v-model="radioValue" type="success">
        <radio value="left">Left</radio>
        <radio value="middle" checked>Middle</radio>
        <radio value="right">Right</radio>
      </radio-group>
      <p>
        <pre>
Radio value: {{radioValue}}
        </pre>
      </p>
    </div>

    <pre><code class="language-markup">&lt;checkbox-group v-model="checkboxValue"&gt;
  &lt;checkbox value="left"&gt;Left&lt;/checkbox&gt;
  &lt;checkbox value="middle" checked&gt;Middle&lt;/checkbox&gt;
  &lt;checkbox value="right"&gt;Right&lt;/checkbox&gt;
&lt;/checkbox-group&gt;

&lt;radio-group v-model="radioValue" type="primary"&gt;
  &lt;radio value="left"&gt;Left&lt;/radio&gt;
  &lt;radio value="middle" checked&gt;Middle&lt;/radio&gt;
  &lt;radio value="right"&gt;Right&lt;/radio&gt;
&lt;/radio-group&gt;

&lt;radio-group v-model="radioValue" type="success"&gt;
  &lt;radio value="left"&gt;Left&lt;/radio&gt;
  &lt;radio value="middle" checked&gt;Middle&lt;/radio&gt;
  &lt;radio value="right"&gt;Right&lt;/radio&gt;
&lt;/radio-group&gt;
</code></pre>

    <h2>Group options</h2>
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
          <td><code>Array</code> or <code>String</code></td>
          <td></td>
          <td>If defined, then the defined values will be checked otherwise the elements with a checked attribute
          will be checked.</td>
        </tr>
        <tr>
          <td>type</td>
          <td><code>String</code>, one of <code>default</code>
          <code>primary</code>
          <code>danger</code>
          <code>info</code>
          <code>warning</code>
          <code>success</code></td>
          <td><code>default</code></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checkboxValue: [],
        radioValue: ''
      }
    }
  }
</script>
