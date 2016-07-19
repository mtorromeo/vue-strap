<template>
  <div class="bs-docs-section" id="dropdown">
    <h1 class="page-header"><a href="#dropdown" class="anchor">Dropdown</a></h1>

    <tabset>
      <tab header="Example">
        <dropdown>
          <button type="button" class="btn btn-default" data-toggle="dropdown">
            Action
            <span class="caret"></span>
          </button>
          <ul slot="dropdown-menu" class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </dropdown>

        <dropdown>
          <button type="button" class="btn btn-success" data-toggle="dropdown">
            Action <span class="caret"></span>
          </button>
          <ul slot="dropdown-menu" class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </dropdown>

        <dropdown>
          <button type="button" class="btn btn-primary" data-toggle="dropdown">
            Action <span class="caret"></span>
          </button>
          <ul slot="dropdown-menu" class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </dropdown>

        <div class="btn-group btn-group-justified" role="group">
          <a href="#" class="btn btn-default" role="button">Left</a>
          <a href="#" class="btn btn-default" role="button">Middle</a>
          <dropdown>
            <a href="#" class="btn btn-default" data-toggle="dropdown">
              Dropdown <span class="caret"></span>
            </a>
            <ul slot="dropdown-menu" class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </dropdown>
        </div>
      </tab>

      <tab header="Markup">
        <pre><code class="language-markup"><script type="language-mark-up"><dropdown>
  <button type="button" class="btn btn-default" data-toggle="dropdown">
    Action
    <span class="caret"></span>
  </button>
  <ul slot="dropdown-menu" class="dropdown-menu">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</dropdown>
</script></code></pre>
      </tab>

      <tab header="Usage">
        <p>
          Just use as <a target="_blank" href="http://getbootstrap.com/javascript/#dropdowns">original Bootstrap way</a>.
        </p>
      </tab>
    </tabset>
  </div>
</template>

<script>
  import dropdown from 'src/Dropdown.vue'
  import tabset from 'src/Tabset.vue';
  import tab from 'src/Tab.vue';

  export default {
    components: {
      dropdown,
      tabset,
      tab,
    }
  }
</script>
