import Controller from '@ember/controller';
import { htmlSafe } from '@ember/template';

const imgUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/45544/icon-tomster.png';

export default class ApplicationController extends Controller {

  get htmlContent(){
    return `<img src="${imgUrl}"  data-something="dangerous" onload=console.log("triple-curlies")//><b>Tomster</b>`;
  }

  get safeStringContent() {
    return htmlSafe(
      `<img src="${imgUrl}"  data-something="dangerous" onload=console.log("safe-string")//><b>Tomster</b>`
    );
  }

  customConfig = {
    ALLOWED_TAGS: ["img"]
  };
}
