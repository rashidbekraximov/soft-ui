<template>
  <div className="py-4 container-fluid">
    <div className="row">
      <div className="col-12">
        <div class="card mb-4">
          <div class="card-header pb-0">
            <!--      <h6>{{header}}</h6>-->
          </div>
          <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                <tr>
                  <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Author
                  </th>
                  <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Function
                  </th>
                  <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Status
                  </th>
                  <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Employed
                  </th>
                  <th class="text-secondary opacity-7"></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <div class="d-flex px-2 py-1">
                      <div class="d-flex flex-column justify-content-center">
                        <h6 class="mb-0 text-sm">John Michael</h6>
                        <p class="text-xs text-secondary mb-0">
                          john@creative-tim.com
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-xs font-weight-bold mb-0">Manager</p>
                    <p class="text-xs text-secondary mb-0">Organization</p>
                  </td>
                  <td class="align-middle text-center text-sm">
                    <soft-badge color="success" variant="gradient" size="sm"
                    >Online</soft-badge
                    >
                  </td>
                  <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold"
                >23/04/18</span
                >
                  </td>
                  <td class="align-middle">
                    <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                    >Edit</a
                    >
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="pagination-container d-flex justify-content-center align-items-center m-3">
<!--            <b-pagination-->
<!--                aria-controls="my-table"-->
<!--            ></b-pagination>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Documents",
  components: {
  },
  data(){
    return {
      header : "Documents"
    }
  }
};


</script>
