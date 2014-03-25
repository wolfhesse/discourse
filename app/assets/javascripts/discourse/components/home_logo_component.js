Discourse.HomeLogoComponent = Ember.Component.extend({
    classNames: ["title",'roger-hack-home-logo'],

    linkUrl: function () {
        return Discourse.getURL("/");
    }.property(),

    // hack r20140320
    whiteCanvas: function () {
        return Discourse.getUrl("/");
    }.property(),
    // eo-hack

    showSmallLogo: function () {
        return !Discourse.Mobile.mobileView && this.get("minimized");
    }.property("minimized"),

    smallLogoUrl: function () {
        return Discourse.SiteSettings.logo_small_url;
    }.property(),

    bigLogoUrl: function () {
        return Discourse.SiteSettings.logo_url;
    }.property(),

    title: function () {
        return Discourse.SiteSettings.title;
    }.property()
});
