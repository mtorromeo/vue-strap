<template>
  <li class="btn-group dropdown">
    <slot>
      <a href="javascript:void(0)" data-toggle="dropdown">
        <span :class="[iconset, iconset + '-menu-hamburger']"></span>
        <span class="caret"></span>
      </a>
    </slot>
    <slot name="dropdown-menu"></slot>
  </li>
</template>

<script>
  import Dropdown from './Dropdown.vue';

  export default {
    mixins: [Dropdown],
  };
</script>
