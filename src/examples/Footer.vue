<template>
  <footer class="py-3 footer">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-lg-between">
        <div class="mb-4 col-lg-8 mb-lg-0">
        </div>
        <div class="mb-4 col-lg-4 mb-lg-0">
          <div class="text-sm  copyright text-muted">
            ©
            {{ new Date().getFullYear() }}, made with
            <i class="fa fa-heart"></i> by
            <a
                href="https://t.me/Geniusboy_04"
                class="font-weight-bold"
                target="_blank"
            >IT Team</a
            >
            for a better web.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
};
</script>
