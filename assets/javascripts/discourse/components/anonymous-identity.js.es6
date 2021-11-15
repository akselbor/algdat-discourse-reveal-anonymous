import discourseComputed from "discourse-common/utils/decorators";
import { userPath } from "discourse/lib/url";

export default Ember.Component.extend({
  @discourseComputed("user.master_user")
  masterUser(master_user) {
    return master_user;
  },

  @discourseComputed("masterUser")
  username(master_user) {
    return master_user && master_user.username;
  },

  @discourseComputed("username")
  link(username) {
    return userPath(username);
  },

  @discourseComputed("username")
  shouldDisplay(username) {
    return this.get("siteSettings.reveal_anonymous_enabled") && this.get("currentUser.staff") && username;
  },

  @discourseComputed("username")
  dataUserCard(username) {
    return username;
  }
});
