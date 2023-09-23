<template>
  <div class="card">
    <div class="card-header pb-0">
      <div class="row">
        <div class="col-lg-6 col-7">
          <h6>Projects</h6>
          <p class="text-sm mb-0">
            <i class="fa fa-check text-info" aria-hidden="true"></i>
            <span class="font-weight-bold ms-1">30 done</span> this month
          </p>
        </div>
        <div class="col-lg-6 col-5 my-auto text-end">
          <div class="dropdown float-lg-end pe-4">
            <a
              class="cursor-pointer"
              id="dropdownTable"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fa fa-ellipsis-v text-secondary" aria-hidden="true"></i>
            </a>
            <ul
              class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5"
              aria-labelledby="dropdownTable"
            >
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;"
                  >Action</a
                >
              </li>
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;"
                  >Another action</a
                >
              </li>
              <li>
                <a class="dropdown-item border-radius-md" href="javascript:;"
                  >Something else here</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body px-0 pb-2">
      <div class="table-responsive">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                ID
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                ISM va Familya
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Texnika turi
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Gas
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Ballon
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Moy
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Amortizatsiya
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                Ish haqi
              </th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                UMUMIY XARAJAT
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <soft-avatar :img="img1" size="sm" class="me-3" alt="xd" />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">Soft UI XD Version</h6>
                  </div>
                </div>
              </td>
              <td>
                <div class="avatar-group mt-2">
                  <a
                    href="javascript:;"
                    class="avatar avatar-xs rounded-circle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-original-title="Ryan Tompson"
                  >
                    <img :src="img2" rounded-circle alt="team1" />
                  </a>
                  <a
                    href="javascript:;"
                    class="avatar avatar-xs rounded-circle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-original-title="Romina Hadid"
                  >
                    <img :src="img3" alt="team2" />
                  </a>
                  <a
                    href="javascript:;"
                    class="avatar avatar-xs rounded-circle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-original-title="Alexander Smith"
                  >
                    <img :src="img4" alt="team3" />
                  </a>
                  <a
                    href="javascript:;"
                    class="avatar avatar-xs rounded-circle"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    data-bs-original-title="Jessica Doe"
                  >
                    <img :src="img5" rounded-circle alt="team4" />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import setTooltip from "@/assets/js/tooltip.js";
import SoftAvatar from "@/components/SoftAvatar.vue";
import img1 from "../../assets/img/small-logos/logo-xd.svg";
import img2 from "../../assets/img/team-1.jpg";
import img3 from "@/assets/img/team-2.jpg";
import img4 from "../../assets/img/team-3.jpg";
import img5 from "../../assets/img/team-4.jpg";
import img6 from "../../assets/img/small-logos/logo-atlassian.svg";
import img7 from "../../assets/img/team-2.jpg";
import img8 from "../../assets/img/team-4.jpg";
import img9 from "../../assets/img/small-logos/logo-slack.svg";
import img10 from "../../assets/img/team-3.jpg";
import img11 from "../../assets/img/team-1.jpg";
import img12 from "../../assets/img/small-logos/logo-spotify.svg";
import img13 from "../../assets/img/team-4.jpg";
import img14 from "../../assets/img/team-3.jpg";
import img15 from "../../assets/img/team-4.jpg";
import img16 from "../../assets/img/team-1.jpg";
import img17 from "../../assets/img/small-logos/logo-jira.svg";
import img18 from "../../assets/img/team-4.jpg";
import img19 from "../../assets/img/small-logos/logo-invision.svg";
import img20 from "../../assets/img/team-1.jpg";
import img21 from "../../assets/img/team-4.jpg";

export default {
  name: "projects-card",
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
      img16,
      img17,
      img18,
      img19,
      img20,
      img21,
    };
  },
  components: {
    SoftAvatar,
  },
  mounted() {
    setTooltip();
  },
};
</script>
