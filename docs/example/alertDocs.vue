<template>
  <div class="bs-docs-section" id="alert">
    <h1 class="page-header">
      <a href="#alert" class="anchor">Alert</a>
    </h1>
    <div class="bs-example" >
      <button class="btn btn-success btn-lg"
        @click="showRight = !showRight">
        Click to toggle alert on right
      </button>

      <button class="btn btn-danger btn-lg"
        @click="showTop = !showTop">
        Click to toggle alert on top
      </button>
      <hr>
      <alert type="success" >
        <strong>Well Done!</strong>
        You successfully read this important alert message.
      </alert>

      <alert type="info" >
        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
      </alert>

      <alert type="danger" dismissable>
        <strong>Oh snap!</strong> Change a few things up and try submitting again.
      </alert>

      <alert type="warning" dismissable>
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
      </alert>

      <alert
        :show="showRight"
        :duration="3000"
        type="success"
        width="400px"
        placement="top-right"
        dismissable
        @close="showRight = false"
      >
        <span class="icon-ok-circled alert-icon-float-left"></span>
        <strong>Well Done!</strong>
        <p>You successfully read this important alert message.</p>
      </alert>

      <alert
        :show="showTop"
        :duration="3000"
        type="danger"
        width="400px"
        placement="top"
        dismissable
        @close="showTop = false"
      >
        <span class="icon-info-circled alert-icon-float-left"></span>
        <strong>Heads up!</strong>
        <p>This alert needs your attention.</p>
      </alert>
    </div>

    <pre><code class="language-markup">&lt;button class="btn btn-default btn-lg"
  @click="showRight = !showRight"&gt;
  Click to toggle alert on right
&lt;/button&gt;

&lt;button class="btn btn-default btn-lg"
  @click="showTop = !showTop"&gt;
  Click to toggle alert on top
&lt;/button&gt;
&lt;hr&gt;
&lt;alert type="success" &gt;
  &lt;strong&gt;Well Done!&lt;/strong&gt;
  You successfully read this important alert message.
&lt;/alert&gt;

&lt;alert type="info" &gt;
  &lt;strong&gt;Heads up!&lt;/strong&gt; This alert needs your attention, but it's not super important.
&lt;/alert&gt;

&lt;alert type="danger" dismissable&gt;
  &lt;strong&gt;Oh snap!&lt;/strong&gt; Change a few things up and try submitting again.
&lt;/alert&gt;

&lt;alert type="warning" dismissable&gt;
  &lt;strong&gt;Warning!&lt;/strong&gt; Better check yourself, you're not looking too good.
&lt;/alert&gt;

&lt;alert
  :show="showRight"
  :duration="3000"
  type="success"
  width="400px"
  placement="top-right"
  dismissable
  @close="showRight = false"
&gt;
  &lt;span class="icon-ok-circled alert-icon-float-left"&gt;&lt;/span&gt;
  &lt;strong&gt;Well Done!&lt;/strong&gt;
  &lt;p&gt;You successfully read this important alert message.&lt;/p&gt;
&lt;/alert&gt;

&lt;alert
  :show="showTop"
  :duration="3000"
  type="danger"
  width="400px"
  placement="top"
  dismissable
  @close="showTop = false"
&gt;
  &lt;span class="icon-info-circled alert-icon-float-left"&gt;&lt;/span&gt;
  &lt;strong&gt;Heads up!&lt;/strong&gt;
  &lt;p&gt;This alert needs your attention.&lt;/p&gt;
&lt;/alert&gt;
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
          <td><code>true</code></td>
          <td>Whether show the component</td>
        </tr>
        <tr>
          <td>dismissable</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>Whether show close button</td>
        </tr>
        <tr>
          <td>type</td>
          <td><code>String</code>, one of
          <code>success</code>
          <code>info</code>
          <code>warning</code>
          <code>danger</code></td>
          <td><code>success</code></td>
          <td>Components styles</td>
        </tr>
        <tr>
          <td>duration</td>
          <td><code>Number</code></td>
          <td><code>0</code></td>
          <td>Auto close duration. Set <code>0</code> or a negative number will NOT be auto-close.</td>
        </tr>
        <tr>
          <td>width</td>
          <td><code>String</code></td>
          <td></td>
        </tr>
        <tr>
          <td>placement</td>
          <td><code>String</code>. one of <code>top</code>, <code>top-right</code></td>
          <td></td>
          <td>how to position the component.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showRight: false,
        showTop: false
      };
    },
  };
</script>

<style>
  .alert-icon-float-left {
    font-size:32px;float:left;margin-right:5px;
  }
</style>
