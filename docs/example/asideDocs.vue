<template>
  <div class="bs-docs-section" id="aside">
    <h1 class="page-header"><a href="#aside" class="anchor">Aside</a></h1>
    <div class="bs-example">
      <button class="btn btn-success btn-lg" @click="showRight = true">Show Aside on right</button>

      <bs-aside :show="showRight" @close="showRight = false" placement="right" header="Title" :width="350">
        <h4>Text in aside</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</p>
        <p> Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.</p>
        <div class="aside-footer">
          <button type="button" class="btn btn-default" @click="showRight=false">Close</button>
        </div>
      </bs-aside>

      <button class="btn btn-danger btn-lg" @click="showLeft = true">Show Aside on left</button>

      <bs-aside :show="showLeft" @close="showLeft = false" placement="left" header="Title" :width="350">
        <h4>Text in aside</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.</p>
        <p> Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.</p>
        <div class="aside-footer">
          <button type="button" class="btn btn-default" @click="showLeft = false">Close</button>
        </div>
      </bs-aside>
    </div>
    <pre><code class="language-markup">&lt;button
class="btn btn-success btn-lg"
@click="showRight = true"&gt;Show Aside on right&lt;/button&gt;

&lt;bs-aside :show="showRight" @close="showRight = false" placement="right" header="Title" :width="350"&gt;
...
&lt;/bs-aside&gt;

&lt;button
class="btn btn-danger btn-lg"
@click="showLeft = true"&gt;Show Aside on left&lt;/button&gt;

&lt;bs-aside :show="showLeft" @close="showLeft = false" placement="left" header="Title" :width="350"&gt;
...
&lt;/bs-aside&gt;
</code></pre>

    <h2>Options</h2>
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
          <td>show</td>
          <td><code>Boolean</code></td>
          <td></td>
          <td>Whether show the component.</td>
        </tr>
        <tr>
          <td>placement</td>
          <td><code>String</code>, one of <code>left</code>, <code>right</code></td>
          <td><code>right</code></td>
          <td>how to position the component.</td>
        </tr>
        <tr>
          <td>header</td>
          <td><code>String</code></td>
          <td></td>
          <td>Header text of the aside component.</td>
        </tr>
        <tr>
          <td>width</td>
          <td><code>Number</code></td>
          <td></td>
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
        showLeft: false,
        showRight: false,
      };
    },
  };
</script>
