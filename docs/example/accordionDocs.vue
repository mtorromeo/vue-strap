<template>
  <div class="bs-docs-section" id="accordion">
    <h1 class="page-header"><a href="#accordion" class="anchor">Accordion</a></h1>
    <div class="bs-example">
      <p>
        <input type="checkbox" v-model="checked">
        Open only one at a time.
      </p>
      <accordion :one-at-a-time="checked">
        <panel header="Panel #1" :is-open="true">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </panel>
        <panel header="Panel #2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </panel>
        <panel header="Panel #3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </panel>
        <panel header="Panel #4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </panel>
      </accordion>
    </div>
    <pre><code class="language-markup">&lt;input type="checkbox" v-model="checked"&gt;
&lt;label for="checked"&gt;Open only one at a time.&lt;/label&gt;

&lt;accordion :one-at-a-time="checked"&gt;
  &lt;panel header="Panel #1" :is-open="true"&gt;
    ...
  &lt;/panel&gt;
  &lt;panel header="Panel #2"&gt;
    ...
  &lt;/panel&gt;
  &lt;panel header="Panel #3"&gt;
    ...
  &lt;/panel&gt;
  &lt;panel header="Panel #4"&gt;
    ...
  &lt;/panel&gt;
&lt;/accordion&gt;
</code></pre>
    <h2>Accordion Options</h2>
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
          <td>one-at-a-time</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>Control whether expanding an item will cause the other items to close.</td>
        </tr>
      </tbody>
    </table>
    <h2>Panel Options</h2>
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
          <td>is-open</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>Whether accordion group is open or closed.</td>
        </tr>
        <tr>
          <td>header</td>
          <td><code>String</code></td>
          <td></td>
          <td>The clickable text on the group's header. You need one to be able to click on the header for toggling.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: true,
      };
    },
  };
</script>
