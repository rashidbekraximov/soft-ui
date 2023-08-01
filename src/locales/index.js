import {Rus} from "./Rus";
import {UzbLat} from "./Uzb";
import {UzbKrill} from "./Krill";

export function getText(word) {
    if (localStorage.getItem("lang")){
        if (localStorage.getItem("lang").substring(6) === "uz_lat") {
            return UzbLat[word]
        }
        else if (localStorage.getItem("lang").substring(6) === "ru") {
            return Rus[word]
        }
        else {
            return UzbKrill[word]
        }
    }
}