! function t(e, n, o) {
    function i(u, a) {
        if (!n[u]) {
            if (!e[u]) {
                var s = "function" == typeof require && require;
                if (!a && s) return s(u, !0);
                if (r) return r(u, !0);
                var f = new Error("Cannot find module '" + u + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var c = n[u] = {
                exports: {}
            };
            e[u][0].call(c.exports, function (t) {
                var n = e[u][1][t];
                return i(n ? n : t)
            }, c, c.exports, t, e, n, o)
        }
        return n[u].exports
    }
    for (var r = "function" == typeof require && require, u = 0; u < o.length; u++) i(o[u]);
    return i
}({
    1: [function (t, e, n) {
        (function (o) {
            ! function (t) {
                if ("object" == typeof n && "undefined" != typeof e) e.exports = t();
                else if ("function" == typeof define && define.amd) define([], t);
                else {
                    var i;
                    i = "undefined" != typeof window ? window : "undefined" != typeof o ? o : "undefined" != typeof self ? self : this, i.Jump = t()
                }
            }(function () {
                return function e(n, o, i) {
                    function r(a, s) {
                        if (!o[a]) {
                            if (!n[a]) {
                                var f = "function" == typeof t && t;
                                if (!s && f) return f(a, !0);
                                if (u) return u(a, !0);
                                var c = new Error("Cannot find module '" + a + "'");
                                throw c.code = "MODULE_NOT_FOUND", c
                            }
                            var d = o[a] = {
                                exports: {}
                            };
                            n[a][0].call(d.exports, function (t) {
                                var e = n[a][1][t];
                                return r(e ? e : t)
                            }, d, d.exports, e, n, o, i)
                        }
                        return o[a].exports
                    }
                    for (var u = "function" == typeof t && t, a = 0; a < i.length; a++) r(i[a]);
                    return r
                }({
                    1: [function (t, e, n) {
                        "use strict";
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        }), n["default"] = function (t, e, n, o) {
                            return t /= o / 2, 1 > t ? n / 2 * t * t + e : (t--, -n / 2 * (t * (t - 2) - 1) + e)
                        }, e.exports = n["default"]
                    }, {}],
                    2: [function (t, e, n) {
                        "use strict";

                        function o(t) {
                            return t && t.__esModule ? t : {
                                "default": t
                            }
                        }

                        function i(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }
                        var r = function () {
                            function t(t, e) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = e[n];
                                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                                }
                            }
                            return function (e, n, o) {
                                return n && t(e.prototype, n), o && t(e, o), e
                            }
                        }();
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var u = t("./easing"),
                            a = o(u),
                            s = function () {
                                function t() {
                                    i(this, t)
                                }
                                return r(t, [{
                                    key: "jump",
                                    value: function (t) {
                                        var e = this,
                                            n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                                        this.start = window.pageYOffset, this.options = {
                                            duration: n.duration,
                                            offset: n.offset || 0,
                                            callback: n.callback || void 0,
                                            easing: n.easing || a["default"]
                                        }, this.distance = "string" == typeof t ? this.options.offset + document.querySelector(t).getBoundingClientRect().top : t, requestAnimationFrame(function (t) {
                                            return e._loop(t)
                                        })
                                    }
                                }, {
                                    key: "_loop",
                                    value: function (t) {
                                        var e = this;
                                        this.timeStart || (this.timeStart = t), this.timeElapsed = t - this.timeStart, this.next = this.options.easing(this.timeElapsed, this.start, this.distance, this.options.duration), window.scrollTo(0, this.next), this.timeElapsed < this.options.duration ? requestAnimationFrame(function (t) {
                                            return e._loop(t)
                                        }) : this._end()
                                    }
                                }, {
                                    key: "_end",
                                    value: function () {
                                        window.scrollTo(0, this.start + this.distance), "function" == typeof this.options.callback && this.options.callback.call(), this.timeStart = !1
                                    }
                                }]), t
                            }();
                        n["default"] = s, e.exports = n["default"]
                    }, {
                        "./easing": 1
                    }]
                }, {}, [2])(2)
            })
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    2: [function (t, e, n) {
        "use strict";

        function o(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var r = t("jump.js"),
            u = o(r),
            a = function f() {
                var t = this;
                arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                i(this, f), this.Jump = new u["default"];
                var e = document.documentElement.clientHeight,
                    n = document.querySelector(".steps").clientHeight,
                    o = document.querySelector(".header-cta"),
                    r = e > n ? (e - n) / 2 : 0;
                o.addEventListener("click", function (e) {
                    e.preventDefault(), t.Jump.jump(".steps", {
                        duration: 1e3,
                        offset: -r
                    })
                });
                var a = document.querySelector(".top-button");
                a.addEventListener("click", function (e) {
                    e.preventDefault(), t.Jump.jump(".header", {
                        duration: 2e3
                    })
                }), window.matchMedia("(min-width: 1024px)").matches && s()
            },
            s = function c() {
                var t = !1,
                    e = 0,
                    n = "transform" in document.body.style ? "transform" : "-webkit-transform",
                    c = document.querySelector(".robot"),
                    o = document.querySelector(".robot-progress"),
                    i = document.querySelector(".footer"),
                    r = document.documentElement.offsetHeight,
                    u = window.innerHeight,
                    a = i.clientHeight,
                    s = r - u - a,
                    f = function () {
                        e = window.pageYOffset, d()
                    },
                    d = function () {
                        t || (requestAnimationFrame(function () {
                            return l()
                        }), t = !0)
                    },
                    l = function () {
                        var r = e / s,
                            a = 180 * r - 90;
                        c.style[n] = "translate3d(0, 0 ,0)", 1 > r ? o.style[n] = "rotate(" + a + "deg)" : c.style[n] = "translate3d(0, -" + (u - i.getBoundingClientRect().top - 1) + "px ,0)", t = !1
                    };
                window.addEventListener("scroll", function () {
                    return f()
                })
            };
        document.addEventListener("DOMContentLoaded", function (t) {
            return new a
        })
    }, {
        "jump.js": 1
    }]
}, {}, [2]);