<template>
  <div class="bs-docs-section" id="tabs">
    <h1 class="page-header"><a href="#tabs" class="anchor">Tabs</a></h1>

    <tabs>
      <tab header="Example" icon="play-circle">
        <span class="glyphicon glyphicon-hand-up animated shake"></span>
        This documentation uses tabs for its layout.
      </tab>

      <tab header="Markup" icon="pencil">
        <pre><code class="language-markup"><script type="language-mark-up"><tabs>
  <tab header="one" icon="pencil">
    ...
  </tab>
  <tab header="two">
    ...
  </tab>
  <tab header="three" disabled>
    ...
  </tab>
</tabs>
</script></code></pre>
      </tab>

      <tab header="Tabs options (container)" icon="th-list">
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
              <td>active</td>
              <td><code>Number</code></td>
              <td><code>0</code></td>
              <td>Active tab index (0 based)</td>
            </tr>
            <tr>
              <td>navStyle</td>
              <td><code>String</code></td>
              <td>tabs</td>
              <td></td>
            </tr>
            <tr>
              <td>effect</td>
              <td><code>String</code></td>
              <td>fadein</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </tab>

      <tab header="Tab options (child)" icon="th-list">
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
              <td>header</td>
              <td><code>String</code></td>
              <td></td>
              <td>Heading text of the tab.</td>
            </tr>
            <tr>
              <td>icon</td>
              <td><code>String</code></td>
              <td></td>
              <td>Icon displayed in the tab heading.</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td><code>Boolean</code></td>
              <td><code>false</code></td>
              <td>Whether tab is clickable and can be activated.</td>
            </tr>
          </tbody>
        </table>
      </tab>
    </tabs>
  </div>
</template>

<script>
  import tabs from 'src/Tabs.vue'
  import tab from 'src/Tab.vue'
  export default {
    components: {
      tabs,
      tab
    }
  }
</script>

<style scoped>
.animated {
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-iteration-count: infinite
}
@keyframes shake {
    0%, 100% {transform: translateY(0);}
    10%, 30%, 50%, 70%, 90% {transform: translateY(-5px);}
    20%, 40%, 60%, 80% {transform: translateY(5px);}
}
.shake {
    -webkit-animation-name: shake;
    animation-name: shake;
}
</style>
