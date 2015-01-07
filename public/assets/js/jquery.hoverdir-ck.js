/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */(function (e, t, n) {
    "use strict";
    e.HoverDir = function (t, n) {
        this.$el = e(n);
        this._init(t)
    };
    e.HoverDir.defaults = {speed: 300, easing: "ease", hoverDelay: 0, inverse: !1};
    e.HoverDir.prototype = {
        _init: function (t) {
            this.options = e.extend(!0, {}, e.HoverDir.defaults, t);
            this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing;
            this.support = Modernizr.csstransitions;
            this._loadEvents()
        }, _loadEvents: function () {
            var t = this;
            e("html, body").on("mouseenter.hoverdir, mouseleave.hoverdir", function (n) {
                var r = e(this), i = r.find("div"), s = t._getDir(r, {x: n.pageX, y: n.pageY}), o = t._getStyle(s);
                if (n.type === "mouseenter") {
                    i.hide().css(o.from);
                    clearTimeout(t.tmhover);
                    t.tmhover = setTimeout(function () {
                        i.show(0, function () {
                            var n = e(this);
                            t.support && n.css("transition", t.transitionProp);
                            t._applyAnimation(n, o.to, t.options.speed)
                        })
                    }, t.options.hoverDelay)
                } else {
                    t.support && i.css("transition", t.transitionProp);
                    clearTimeout(t.tmhover);
                    t._applyAnimation(i, o.from, t.options.speed)
                }
            })
        }, _getDir: function (e, t) {
            var n = e.width(), r = e.height(), i = (t.x - e.offset().left - n / 2) * (n > r ? r / n : 1), s = (t.y - e.offset().top - r / 2) * (r > n ? n / r : 1), o = Math.round((Math.atan2(s, i) * (180 / Math.PI) + 180) / 90 + 3) % 4;
            return o
        }, _getStyle: function (e) {
            var t, n, r = {left: "0px", top: "-100%"}, i = {left: "0px", top: "100%"}, s = {
                left: "-100%",
                top: "0px"
            }, o = {left: "100%", top: "0px"}, u = {top: "0px"}, a = {left: "0px"};
            switch (e) {
                case 0:
                    t = this.options.inverse ? i : r;
                    n = u;
                    break;
                case 1:
                    t = this.options.inverse ? s : o;
                    n = a;
                    break;
                case 2:
                    t = this.options.inverse ? r : i;
                    n = u;
                    break;
                case 3:
                    t = this.options.inverse ? o : s;
                    n = a
            }
            return {from: t, to: n}
        }, _applyAnimation: function (t, n, r) {
            e.fn.applyStyle = this.support ? e.fn.css : e.fn.animate;
            t.stop().applyStyle(n, e.extend(!0, [], {duration: r + "ms"}))
        }
    };
    var r = function (e) {
        t.console && t.console.error(e)
    };
    e.fn.hoverdir = function (t) {
        var n = e.data(this, "hoverdir");
        if (typeof t == "string") {
            var i = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                if (!n) {
                    r("cannot call methods on hoverdir prior to initialization; attempted to call method '" + t + "'");
                    return
                }
                if (!e.isFunction(n[t]) || t.charAt(0) === "_") {
                    r("no such method '" + t + "' for hoverdir instance");
                    return
                }
                n[t].apply(n, i)
            })
        } else this.each(function () {
            n ? n._init() : n = e.data(this, "hoverdir", new e.HoverDir(t, this))
        });
        return n
    }
})(jQuery, window);