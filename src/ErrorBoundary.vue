<template>
<div>
  <div v-if="error" class="error">
      <p class="display">予期せないエラーが発生しました。</p>
      <hr>
      <p class="message">エラーメッセージ:{{error.message}}</p>
      <p class="info">エラー情報: {{info}}</p>
      <p class="stack">エラー詳細: {{error.stack}}</p>
  </div>
  <template v-else>
      <slot/>
  </template>
  </div>
</template>

<script>
export default {
  name: 'ErrorBoundary',
  data () {
    return {
      error: null,
      info: null
    }
  },
  errorCaptured (err, vm, info) {
    this.error = err
    this.info = info
  }
}
</script>

<style scoped>
.error {
    color: red;
    text-align: left;
}
</style>
