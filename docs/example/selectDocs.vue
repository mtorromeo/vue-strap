<template>
  <div class="bs-docs-section" id="select">
    <h1 class="page-header"><a href="#select" class="anchor">Select</a></h1>
    <p>
      This a <a target="_blank" href="https://silviomoreto.github.io/bootstrap-select/">bootstrap-select</a> implementation.
    </p>
    <div class="bs-example">
      <p>
        <pre>Select data : {{single}}</pre>
      </p>
      <bs-select v-model="single">
        <bs-option value="Apple">Apple</bs-option>
        <bs-option value="Banana">Banana</bs-option>
        <bs-option value="Cherry">Cherry</bs-option>
        <bs-option value="Orange">Orange</bs-option>
        <bs-option value="Grape">Grape</bs-option>
      </bs-select>
      <hr>
      <h4>Multiple select</h4>
      <p>
        <pre>Select data : {{multiple.join(', ')}}</pre>
      </p>
      <bs-select multiple v-model="multiple">
        <bs-option value="Apple">Apple</bs-option>
        <bs-option value="Banana">Banana</bs-option>
        <bs-option value="Cherry">Cherry</bs-option>
        <bs-option value="Orange">Orange</bs-option>
        <bs-option value="Grape">Grape</bs-option>
      </bs-select>
      <hr>
      <h4>Multiple select limit</h4>
      <p>
        <pre>Select data : {{multipleLimit.join(', ')}}</pre>
      </p>
      <bs-select multiple :limit="2" v-model="multipleLimit">
        <bs-option value="Apple">Apple</bs-option>
        <bs-option value="Banana">Banana</bs-option>
        <bs-option value="Cherry">Cherry</bs-option>
        <bs-option value="Orange">Orange</bs-option>
        <bs-option value="Grape">Grape</bs-option>
      </bs-select>
      <hr>
      <h4>Custom template</h4>
      <p>
        <pre>Select data : {{custom.join(', ')}}</pre>
      </p>
      <bs-select multiple v-model="custom">
        <bs-option value="Star"><span slot="span" class="glyphicon glyphicon-star"></span> Star</bs-option>
        <bs-option value="Heart"><span slot="span" class="glyphicon glyphicon-heart"></span> Heart</bs-option>
        <bs-option value="Film"><span slot="span" class="glyphicon glyphicon-film"></span> Film</bs-option>
        <bs-option value="Inbox"><span slot="span" class="glyphicon glyphicon-inbox"></span> Inbox</bs-option>
      </bs-select>
      <hr />
      <h4>Array/Collection driven w/ search</h4>
      <p>
        Optionally specify an options (array/collection) which will drive the contents of the property. You can enable search mode in this case.
        <pre>Select data : {{arr}}</pre>
      </p>
      <bs-select v-model="arr" :options="fruitOptions" :search="true" :close-on-select="true">
      </bs-select>

      <hr />
      <h4>Automatically close array driven selects</h4>
      <p>Using the property :close-on-select="true" array driven selects will auto-close after selecting an entry.</p>
      <bs-select v-model="arr2" :options="fruitOptions" :close-on-select="true">
      </bs-select>

      <h4>Disabled selects</h4>
      <bs-select v-model="disabled" :options="fruitOptions" :close-on-select="true" :disabled="true">
      </bs-select>

    </div>
    <pre><code class="language-markup">&lt;bs-select&gt;
  &lt;bs-option value="Apple"&gt;Apple&lt;/bs-option&gt;
  &lt;bs-option value="Banana"&gt;Banana&lt;/bs-option&gt;
  &lt;bs-option value="Cherry"&gt;Cherry&lt;/bs-option&gt;
  &lt;bs-option value="Orange"&gt;Orange&lt;/bs-option&gt;
  &lt;bs-option value="Grape"&gt;Grape&lt;/bs-option&gt;
&lt;/bs-select&gt;
&lt;hr&gt;
&lt;bs-select multiple&gt;
  &lt;bs-option value="Apple"&gt;Apple&lt;/bs-option&gt;
  &lt;bs-option value="Banana"&gt;Banana&lt;/bs-option&gt;
  &lt;bs-option value="Cherry"&gt;Cherry&lt;/bs-option&gt;
  &lt;bs-option value="Orange"&gt;Orange&lt;/bs-option&gt;
  &lt;bs-option value="Grape"&gt;Grape&lt;/bs-option&gt;
&lt;/bs-select&gt;
&lt;hr&gt;
 &lt;bs-select multiple :limit="2"&gt;
  &lt;bs-option value="Apple"&gt;Apple&lt;/bs-option&gt;
  &lt;bs-option value="Banana"&gt;Banana&lt;/bs-option&gt;
  &lt;bs-option value="Cherry"&gt;Cherry&lt;/bs-option&gt;
  &lt;bs-option value="Orange"&gt;Orange&lt;/bs-option&gt;
  &lt;bs-option value="Grape"&gt;Grape&lt;/bs-option&gt;
&lt;/bs-select&gt;
&lt;hr&gt;
&lt;bs-select multiple&gt;
  &lt;bs-option value="Star"&gt;&lt;span slot="span" class="glyphicon glyphicon-star"&gt;&lt;/span&gt; Star&lt;/bs-option&gt;
  &lt;bs-option value="Heart"&gt;&lt;span slot="span" class="glyphicon glyphicon-heart"&gt;&lt;/span&gt; Heart&lt;/bs-option&gt;
  &lt;bs-option value="Film"&gt;&lt;span slot="span" class="glyphicon glyphicon-film"&gt;&lt;/span&gt; Film&lt;/bs-option&gt;
  &lt;bs-option value="Inbox"&gt;&lt;span slot="span" class="glyphicon glyphicon-inbox"&gt;&lt;/span&gt; Inbox&lt;/bs-option&gt;
&lt;/bs-select&gt;

&lt;bs-select v-model="arr" :options="fruitOptions" :search="true"&gt;
&lt;/bs-select&gt;
fruitOptions = [
  {value:'apple', label:'Apple'},
  {value:'banana', label:'Banana'},
  {value:'cherry', label:'Cherry'},
  {value:'orange', label:'Orange'},
  {value:'grape', label:'Grape'},
]

&lt;bs-select v-model="arr2" :options="fruitOptions" :close-on-select="true"&gt;
&lt;/bs-select&gt;
</code></pre>
    <h2>Select Options</h2>
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
          <td><code>Array</code></td>
          <td><code>[]</code></td>
          <td></td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td><code>String</code></td>
          <td>Nothing Selected</td>
          <td></td>
        </tr>
        <tr>
          <td>multiple</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td></td>
        </tr>
        <tr>
          <td>limit</td>
          <td><code>Number</code></td>
          <td><code>1024</code></td>
          <td>Limit the number of elements you are allowed to select.</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
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
        fruitOptions: [
          {value:'Apple', label:'Apple'},
          {value:'Banana', label:'Banana'},
          {value:'Cherry', label:'Cherry'},
          {value:'Orange', label:'Orange'},
          {value:'Grape', label:'Grape'},
        ],
        arr: [],
        arr2: [],
        single: [],
        multiple: [],
        multipleLimit: [],
        custom: [],
        disabled: [],
      };
    },
  };
</script>
